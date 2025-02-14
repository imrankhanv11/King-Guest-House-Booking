package com.kingguesthouse.booking.repository;

import com.kingguesthouse.booking.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
