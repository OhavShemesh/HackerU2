import React from 'react'
import PageHeader from './PageHeader'
import CardBody from '../../cards/components/card/CardBody'
import Cards from '../../cards/components/Cards'

export default function CardsPage() {
    return (
        <div>
            <PageHeader title={"Card"} subtitle={"Card but smaller"} />
            <Cards />
        </div>
    )
}
