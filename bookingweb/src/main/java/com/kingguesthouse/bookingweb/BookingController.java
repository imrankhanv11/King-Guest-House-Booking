package com.kingguesthouse.booking.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @GetMapping("/test")
    public String testBookingAPI() {
        return "Booking API is working!";
    }

    @PostMapping
    public String createBooking(@RequestParam String guestName, 
                                @RequestParam String email, 
                                @RequestParam String phone,
                                @RequestParam String checkInDate, 
                                @RequestParam String checkOutDate, 
                                @RequestParam int numberOfGuests) {
        
        return "Booking confirmed for " + guestName + " from " + checkInDate + " to " + checkOutDate;
    }
}
