import React, { Component } from 'react'

export default class Notification extends Component {
    constructor () {
        super ()

        this.state = {
            notif : [
                "Num 1",
                "Num 2",
                "Num 3",
                "Num 4",
                "Num 5"
            ]
        }
    }

  render() {
    return (
      <div>
        <nav className=' h-[50px] w-full border space-x-4 flex items-center bg-gray-700 pl-7'>
            <h2 className=' text-gray-300'>Hello world</h2>
            {this.state.notif.length > 0 && <span className=' text-gray-300 text-sm mt-[2.5px] absolute left-28 opacity-70'>News
                <span className=' relative bottom-[12px] text-[10px] border rounded-full border-x-4 border-orange-500 bg-orange-500 text-gray-300'>{this.state.notif.length}</span>
            </span>}
        </nav>
      </div>
    )
  }
}
