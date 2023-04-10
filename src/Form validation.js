import React, { Component } from 'react'

export default class Form extends Component {

    constructor() {
        super()

        this.state = {
            submitted: false,
            firstNameData: '',
            lastNameData: '',
            emailData: '',
            allValid: false,
        }

        this.submitHandler = this.submitHandler.bind(this)
        this.firstNameValidation = this.firstNameValidation.bind(this)
        this.lastNameValidation = this.lastNameValidation.bind(this)
        this.emailValidation = this.emailValidation.bind(this)
        


    }

    submitHandler (event) {
        event.preventDefault()
        this.setState({
            submitted : true
        })
        console.log(event);

        if (this.state.submitted && this.state.firstNameData.length !==0 &&
            this.state.lastNameData.length !==0 &&
            this.state.emailData.length !==0) {
                this.setState({
                    allValid: true,
                })
                setTimeout(() => {
                    this.setState({
                        allValid: false,
                    })
                }, 3000);
            }

    }
    firstNameValidation(event) {
        this.setState({
            firstNameData: event.target.value
        })
    }
    lastNameValidation(event) {
        this.setState({
            lastNameData: event.target.value
        })
    }
    emailValidation(event) {
        this.setState({
            emailData: event.target.value
        })
    }




  render() {
    return (
      <div className='bg-green-500 h-screen'>
        <form action="#" onSubmit={this.submitHandler} className='flex flex-col items-center pt-7'>
            <div className='flex flex-col bg-white shadow-2xl h-full'>
                {this.state.submitted && this.state.allValid && (
                    <div className='p-2 mt-5 mx-3 bg-blue-400 rounded'>
                    Success! Thank you for registering.
                </div>
                )}
                <input type="text" id='FirstName' value={this.state.firstNameData} onChange={this.firstNameValidation} className=' p-2 mt-2 mx-3 bg-slate-200 rounded' placeholder='First Name'/>
                {this.state.submitted && this.state.firstNameData.length ===0 &&(
                    <span className=' mt-1 mx-3 font-thin text-sm text-red-600'>Please enter your first name</span>
                )}
                <input type="text" id='LastName' value={this.state.lastNameData} onChange={this.lastNameValidation} className=' p-2 mt-5 mx-3 bg-slate-200 rounded' placeholder='Last Name'/>
                {this.state.submitted && this.state.lastNameData.length ===0 &&(
                    <span className=' mt-1 mx-3 font-thin text-sm text-red-600'>Please enter your last name</span>
                )}
                <input type="email" id='Email' value={this.state.emailData} onChange={this.emailValidation} className=' p-2 mt-5 mx-3 bg-slate-200 rounded' placeholder='Email'/>
                {this.state.submitted && this.state.emailData.length ===0 && (
                    <span className=' mt-1 mx-3 font-thin text-sm text-red-600'>Please enter an email address</span>
                )}
                <button type='submit' className=' p-2 mt-5 mx-3 bg-green-500 mb-5 rounded '>Register</button>
            </div>
        </form>
      </div>
    )
  }
}
