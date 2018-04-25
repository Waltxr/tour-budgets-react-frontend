import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import * as actions from '../actions/index';
import { connect }  from 'react-redux';
import { withRouter } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { LabelInputField } from 'react-semantic-redux-form';

class LoginForm extends React.Component {

  handleSubmit = event => {    
    this.props.loginUser(event.target.email.value, event.target.password.value)
  }

  render() {
    return (
      <div className='login-form'>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              {' '}Log-in to your account
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Field
                  component={LabelInputField}
                  name='email'
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                />
                <Field
                  component={LabelInputField}
                  name='password'
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />
                <Form.Field
                control={Button}
                primary
                className='submit-btn'
                type='submit'>
                Login
              </Form.Field>
              </Segment>
            </Form>
            <Message>
              New to us? <a href='#'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }

}

LoginForm = withRouter(connect(null, actions)(LoginForm))

export default reduxForm({
  form: 'loginForm',	// a unique identifier for this form
})(LoginForm)
