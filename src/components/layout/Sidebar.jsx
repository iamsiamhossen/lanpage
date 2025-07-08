import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      avatar: "https://i.pinimg.com/736x/33/c2/3e/33c23efec5457ec3ef448c9a15d62431.jpg",
      name: "John Doe",
      jobTitle: "Software Engineer",
      quote: "JobFinder helped me find my dream job in just a few weeks. Highly recommended!",
    },
    {
      id: 2,
      avatar: "https://i.pinimg.com/736x/9d/14/6e/9d146e4c5e79ebc9c5f970a464fa6f04.jpg",
      name: "Jane Smith",
      jobTitle: "Marketing Manager",
      quote: "The platform is easy to use, and the job listings are up-to-date. Great experience!",
    },
    {
      id: 3,
      avatar: "https://i.pinimg.com/736x/65/17/77/65177747fc17b5368f4740d5209f2958.jpg",
      name: "Alice Johnson",
      jobTitle: "Data Analyst",
      quote: "I found multiple job opportunities that matched my skills. Thank you, JobFinder!",
    },
    {
      id: 4,
      avatar: "https://i.pinimg.com/736x/e8/77/84/e87784864b8dc550dbb1ec6b6a4f6f64.jpg",
      name: "Michael Brown",
      jobTitle: "Product Manager",
      quote: "JobFinder made my job search effortless. I landed a great role in no time!",
    },
    {
      id: 5,
      avatar: "https://i.pinimg.com/736x/91/cc/a8/91cca8839fde6b8be674779d22e51f79.jpg",
      name: "Sarah Lee",
      jobTitle: "UI/UX Designer",
      quote: "The platform is intuitive, and the support team is amazing. Highly recommend!",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-800 dark:text-purple-400">
          What Our Users Say
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white dark:bg-gray-800 border border-purple-100 dark:border-purple-900 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 cursor-pointer">
                {/* Quoted Text Icon */}
                <svg
                  className="w-8 h-8 mx-auto mb-4 text-purple-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>

                {/* Avatar */}
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-6 border-2 border-purple-200"
                />

                {/* Name */}
                <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-400">
                  {testimonial.name}
                </h3>

                {/* Job Title */}
                <p className="text-sm text-purple-600 dark:text-purple-300 mb-4">
                  {testimonial.jobTitle}
                </p>

                {/* Quote */}
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "{testimonial.quote}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;