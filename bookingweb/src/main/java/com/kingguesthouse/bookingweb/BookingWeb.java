package com.kingguesthouse.booking.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BookingWeb {

    @GetMapping("/")
    public String showBookingPage(Model model) {
        return "booking";  // This should match your Thymeleaf HTML file (booking.html)
    }
}
