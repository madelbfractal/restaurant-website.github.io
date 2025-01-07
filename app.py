from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, login_user, logout_user, login_required, current_user
from werkzeug.security import generate_password_hash, check_password_hash
import stripe

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ecommerce.db'
app.config['SECRET_KEY'] = 'your_secret_key'
db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)
stripe.api_key = 'your_stripe_secret_key'

from auth import auth as auth_blueprint
app.register_blueprint(auth_blueprint)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.String(200), nullable=False)

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    items = db.Column(db.String(200), nullable=False)
    total = db.Column(db.Float, nullable=False)
    payment_id = db.Column(db.String(100), nullable=False)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/')
def index():
    products = Product.query.all()
    return render_template('index.html', products=products)

@app.route('/product/<int:product_id>')
def product(product_id):
    product = Product.query.get_or_404(product_id)
    return render_template('product.html', product=product)

@app.route('/cart')
@login_required
def cart():
    return render_template('cart.html')

@app.route('/checkout', methods=['POST'])
@login_required
def checkout():
    cart_items = request.json.get('cart_items')
    total = request.json.get('total')

    session = stripe.checkout.Session.create(
        payment_method_types=['card'],
        line_items=[{
            'price_data': {
                'currency': 'usd',
                'product_data': {
                    'name': item['name'],
                },
                'unit_amount': int(item['price'] * 100),
            },
            'quantity': item['quantity'],
        } for item in cart_items],
        mode='payment',
        success_url=url_for('payment_success', _external=True),
        cancel_url=url_for('checkout', _external=True),
    )

    order = Order(items=str(cart_items), total=total, payment_id=session.id)
    db.session.add(order)
    db.session.commit()

    return jsonify({'sessionId': session.id})

@app.route('/payment-success')
def payment_success():
    return render_template('payment_success.html')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500

if __name__ == '__main__':
    app.run(debug=True)