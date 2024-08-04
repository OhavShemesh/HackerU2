import React from 'react'
import CardComponent from './card/CardComponent'
import { Box } from '@mui/material'

const CardsArr = [{
  _id: "63765801e20ed868a69a62c4",
  title: "first",
  subtitle: "subtitle",
  description: "testing 123",
  phone: "050-0000000",
  email: "test@gmail.com",
  web: "https://www.test.co.il",
  image: {
    url: "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg",
    alt: "Business card image",
  },
  address: {
    state: "",
    country: "country",
    city: "tel-aviv",
    street: "Shinkin",
    houseNumber: 3,
    zip: 1234,
  },
  bizNumber: 1000000,
  user_id: "63765801e20ed868a69a62c2",
}, {
  _id: "63765801e20ed868a69a62c5",
  title: "second",
  subtitle: "another subtitle",
  description: "example description",
  phone: "051-1111111",
  email: "example@gmail.com",
  web: "https://www.example.com",
  image: {
    url: "cat.jpg",
    alt: "Office workspace image",
  },
  address: {
    state: "California",
    country: "USA",
    city: "San Francisco",
    street: "Market Street",
    houseNumber: 45,
    zip: 94103,
  },
  bizNumber: 2000000,
  user_id: "63765801e20ed868a69a62c3",
}, {
  _id: "63765801e20ed868a69a62c6",
  title: "third",
  subtitle: "yet another subtitle",
  description: "sample description",
  phone: "052-2222222",
  email: "sample@gmail.com",
  web: "https://www.sample.com",
  image: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/1200px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg",
    alt: "Business meeting image",
  },
  address: {
    state: "New York",
    country: "USA",
    city: "New York City",
    street: "5th Avenue",
    houseNumber: 101,
    zip: 10001,
  },
  bizNumber: 3000000,
  user_id: "63765801e20ed868a69a62c7",
}]


export default function Cards() {
  const handleEdit = (id) => {
    console.log(id + " Edited");
  }
  const handleDelete = (id) => {
    console.log(id + " Deleted");
  }
  const handleLike = (id) => {
    console.log(id + " Liked");
  }
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
      {CardsArr.map((card) =>
        <CardComponent handleEdit={handleEdit} handleDelete={handleDelete} handleLike={handleLike} card={card} key={card._id} />
      )}
    </Box>
  )
}
