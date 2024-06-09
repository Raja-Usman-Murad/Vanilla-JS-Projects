"use struict";

const bookings = [];

// const createBooking = (flightNumber, numPassengers = 5, price = 9) => {
//   //   // old way
//   //   numPassengers = numPassengers || 5;

//   //   // new way
//   //   price = price ?? 5;

//   const booking = {
//     numPassengers,
//     flightNumber,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking("abc");

// const booking = {
//   flightNumber: 56,
//   price: 89,
// };

// const createBooking = (booking) => {
//   const { flightNumber, numPassengers: noOfPassengers = 100, price } = booking;
//   const bookingNew = {
//     flightNumber,
//     noOfPassengers,
//     price,
//   };
//   console.log(bookingNew, "new booking");
// };
// createBooking(booking);

// const booking = {
//   flightNumber: 56,
//   price: 89,
//   passengers: {
//     name: "raja",
//     age: 23,
//   },
// };

// console.log(booking);
// console.log(booking?.passengers?.age?.name ?? "no name exist in age");
