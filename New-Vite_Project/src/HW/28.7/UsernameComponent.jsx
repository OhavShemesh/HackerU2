import React from 'react'

export default function UsernameComponent({ user }) {
    if (user.firstName) {
        return (
            <div>
                Hello {user.firstName}
            </div>
        )

    } else {
        return (
            <div>Hello Guest</div>
        )
    }
}
