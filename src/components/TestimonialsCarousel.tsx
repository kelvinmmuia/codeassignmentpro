"use client";

import { useState, useEffect, useCallback } from "react";
import reviews from "@/data/reviews.json";

interface Review {
    id: number;
    quote: string;
    author: string;
    location: string;
    service: string;
    rating: number;
    highlight: string;
}

export default function TestimonialsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [touchStart, setTouchStart] = useState(0);

    const totalReviews = reviews.length;

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % totalReviews);
    }, [totalReviews]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
    }, [totalReviews]);

    // Auto-play
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    // Touch handlers for mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
        setIsAutoPlaying(false);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const touchEnd = e.changedTouches[0].clientX;
        const diff = touchStart - touchEnd;
        if (Math.abs(diff) > 50) {
            if (diff > 0) nextSlide();
            else prevSlide();
        }
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    // Get visible reviews (current, prev, next)
    const getVisibleIndex = (offset: number) => {
        return (currentIndex + offset + totalReviews) % totalReviews;
    };

    const renderStars = (rating: number) => (
        <div className="flex gap-1">
            {[...Array(rating)].map((_, i) => (
                <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );

    const ReviewCard = ({
        review,
        position,
    }: {
        review: Review;
        position: "left" | "center" | "right";
    }) => {
        const positionClasses = {
            left: "opacity-40 scale-90 -translate-x-4 hidden md:block",
            center: "opacity-100 scale-100 z-10",
            right: "opacity-40 scale-90 translate-x-4 hidden md:block",
        };

        return (
            <div
                className={`transition-all duration-500 ease-out flex-shrink-0 w-full md:w-1/3 px-2 ${positionClasses[position]}`}
            >
                <div
                    className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full ${position === "center" ? "ring-2 ring-primary/20" : ""
                        }`}
                >
                    {/* Highlight Badge */}
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        {review.highlight}
                    </span>

                    {/* Stars */}
                    <div className="mb-4">{renderStars(review.rating)}</div>

                    {/* Quote */}
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-4">
                        &ldquo;{review.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                        <p className="font-semibold text-gray-900 text-sm">
                            {review.author}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                            <span>{review.location}</span>
                            <span className="text-primary">{review.service}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                        Client Reviews
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-gray-600">
                        Real feedback from {totalReviews}+ completed projects
                    </p>
                </div>

                {/* Carousel Container */}
                <div
                    className="relative"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Fade Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-20 pointer-events-none hidden md:block"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-20 pointer-events-none hidden md:block"></div>

                    {/* Reviews */}
                    <div className="flex items-stretch justify-center">
                        <ReviewCard
                            review={reviews[getVisibleIndex(-1)] as Review}
                            position="left"
                        />
                        <ReviewCard
                            review={reviews[currentIndex] as Review}
                            position="center"
                        />
                        <ReviewCard
                            review={reviews[getVisibleIndex(1)] as Review}
                            position="right"
                        />
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={() => {
                            prevSlide();
                            setIsAutoPlaying(false);
                            setTimeout(() => setIsAutoPlaying(true), 10000);
                        }}
                        className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
                        aria-label="Previous review"
                    >
                        <svg
                            className="w-5 h-5 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={() => {
                            nextSlide();
                            setIsAutoPlaying(false);
                            setTimeout(() => setIsAutoPlaying(true), 10000);
                        }}
                        className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
                        aria-label="Next review"
                    >
                        <svg
                            className="w-5 h-5 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-8">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setCurrentIndex(index);
                                setIsAutoPlaying(false);
                                setTimeout(() => setIsAutoPlaying(true), 10000);
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                    ? "bg-primary w-6"
                                    : "bg-gray-300 hover:bg-gray-400"
                                }`}
                            aria-label={`Go to review ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Stats */}
                <div className="flex justify-center gap-8 mt-8 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <svg
                            className="w-5 h-5 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>
                            <strong className="text-gray-900">500+</strong> Projects
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg
                            className="w-5 h-5 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>
                            <strong className="text-gray-900">4.9/5</strong> Rating
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg
                            className="w-5 h-5 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>
                            <strong className="text-gray-900">6+</strong> Years
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
