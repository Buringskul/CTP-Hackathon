from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, EmailField
from wtforms.validators import DataRequired, Length, Email, EqualTo


class SignUpForm(FlaskForm):
    first_name = StringField('First Name', validators=[
                             DataRequired(), Length(min=2, max=20)])
    last_name = StringField('Last Name', validators=[
                            DataRequired(), Length(min=2, max=20)])
    email = EmailField('Email', validators=[DataRequired(), Email(message="Please use a .cuny.edu email.")])
    password = PasswordField('Password', validators=[
                             DataRequired(), Length(min=8)])
    confirm_password = PasswordField('Confirm Password', validators=[
                                     DataRequired(), EqualTo('password', message="Passwords must match.")])
    submit = SubmitField('Register')


class SignInForm(FlaskForm):
    email = EmailField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Sign In')

class ForumPost(FlaskForm):
    body = StringField('Begin forum post...', validators=[DataRequired(), Length(max=280)])