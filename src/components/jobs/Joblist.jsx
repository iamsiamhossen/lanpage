const jobs = [
    // Sponsored Jobs
    {
      id: 1,
      logo: "https://i.pinimg.com/736x/35/52/43/355243ba34eb90ff2efc927386ac91da.jpg",
      title: "Fedex Delivery Driver",
      location: "New York, USA",
      type: "Part Time",
      salary: "$200 - $500",
      sponsored: true,
      sponsor: "Fedex Group",
      category: "Sponsored Jobs",
      description: "Deliver packages to customers in a timely and professional manner. Must have a valid driver's license.",
      address: "123 Main St, New York, NY 10001",
      requirements: ["Valid driver's license", "Clean driving record", "Ability to lift 50 lbs"],
      benefits: ["Flexible hours", "Health insurance", "Paid time off"],
      deadline: "2023-12-15",
    },
    {
      id: 2,
      logo: "https://i.pinimg.com/736x/a5/89/c8/a589c8077c7e4735b767a9ffc7ef6c23.jpg",
      title: "CocaCola Sales Representative",
      location: "Texas, USA",
      type: "Part Time",
      salary: "$250 - $450",
      sponsored: true,
      sponsor: "CocaCola Company",
      category: "Sponsored Jobs",
      description: "Promote and sell CocaCola products to local businesses. Build strong customer relationships.",
      address: "456 Elm St, Dallas, TX 75201",
      requirements: ["Sales experience", "Excellent communication skills", "Own vehicle"],
      benefits: ["Commission-based pay", "Training provided", "Career growth opportunities"],
      deadline: "2023-12-20",
    },
    {
      id: 3,
      logo: "https://i.pinimg.com/736x/e9/3e/31/e93e318c2f98bb63c584e49f46d3791c.jpg",
      title: "Aldi Store Associate",
      location: "California, USA",
      type: "Full Time",
      salary: "$350 - $600",
      sponsored: true,
      sponsor: "Aldi Group",
      category: "Sponsored Jobs",
      description: "Assist customers, manage inventory, and maintain store cleanliness. Fast-paced environment.",
      address: "789 Oak St, Los Angeles, CA 90001",
      requirements: ["Retail experience", "Team player", "Ability to work weekends"],
      benefits: ["Competitive pay", "Employee discounts", "Health benefits"],
      deadline: "2023-12-18",
    },
    {
      id: 4,
      logo: "https://i.pinimg.com/736x/0d/2c/42/0d2c425bd8fa8449f566ea2804473b8e.jpg",
      title: "Amazon Warehouse Associate",
      location: "Florida, USA",
      type: "Part Time",
      salary: "$250 - $600",
      sponsored: true,
      sponsor: "Amazon",
      category: "Sponsored Jobs",
      description: "Pick, pack, and ship customer orders in a fast-paced warehouse environment.",
      address: "321 Pine St, Miami, FL 33101",
      requirements: ["Ability to stand for long hours", "Attention to detail", "Teamwork skills"],
      benefits: ["Flexible shifts", "Overtime pay", "Career advancement"],
      deadline: "2023-12-22",
    },
    {
      id: 5,
      logo: "https://i.pinimg.com/736x/47/47/87/474787bacc49e86a463a7aa6f159b6ca.jpg",
      title: "Kelly Service Administrative Assistant",
      location: "Texas, USA",
      type: "Full Time",
      salary: "$350 - $550",
      sponsored: true,
      sponsor: "Kelly Service Group",
      category: "Sponsored Jobs",
      description: "Provide administrative support to the team. Manage schedules, emails, and office tasks.",
      address: "654 Maple St, Houston, TX 77001",
      requirements: ["Proficiency in Microsoft Office", "Organizational skills", "Customer service experience"],
      benefits: ["Health insurance", "Paid holidays", "Remote work options"],
      deadline: "2023-12-25",
    },
    {
      id: 6,
      logo: "https://i.pinimg.com/736x/59/83/14/598314074a9a7f3fcd0facf8f27d744d.jpg",
      title: "Starbucks Barista",
      location: "Chicago, USA",
      type: "Part Time",
      salary: "$15/hour + Tips",
      sponsored: true,
      sponsor: "Starbucks",
      category: "Sponsored Jobs",
      description: "Prepare and serve beverages and food items. Provide excellent customer service in a fast-paced environment.",
      address: "789 Michigan Ave, Chicago, IL 60601",
      requirements: ["Customer service experience", "Ability to work in a team", "Flexible schedule"],
      benefits: ["Tips", "Employee discounts", "Health benefits"],
      deadline: "2023-12-28",
    },
  
    // High-Paying Jobs
    {
      id: 7,
      logo: "https://i.pinimg.com/736x/c0/1c/93/c01c93914ef930dabf9258a7eaec3a17.jpg",
      title: "Software Engineer",
      location: "Remote",
      type: "Full Time",
      salary: "$80k - $120k",
      sponsored: false,
      category: "High-Paying Jobs",
      description: "Develop and maintain software applications. Collaborate with cross-functional teams.",
      address: "Remote",
      requirements: ["Bachelor's degree in Computer Science", "3+ years of experience", "Proficiency in JavaScript"],
      benefits: ["Remote work", "Stock options", "Unlimited PTO"],
      deadline: "2023-12-30",
    },
    {
      id: 8,
      logo: "https://i.pinimg.com/736x/87/83/b6/8783b6ee73f4741395646aa7af572651.jpg",
      title: "Data Scientist",
      location: "San Francisco, USA",
      type: "Full Time",
      salary: "$90k - $130k",
      sponsored: false,
      category: "High-Paying Jobs",
      description: "Analyze complex data sets to provide actionable insights. Build predictive models.",
      address: "456 Market St, San Francisco, CA 94101",
      requirements: ["Master's degree in Data Science", "Python expertise", "Experience with machine learning"],
      benefits: ["Competitive salary", "401(k) matching", "Flexible work hours"],
      deadline: "2023-12-25",
    },
    {
      id: 9,
      logo: "https://i.pinimg.com/736x/d5/1d/8b/d51d8b2ff28db324ed1be2766f793c43.jpg",
      title: "Product Manager",
      location: "Seattle, USA",
      type: "Full Time",
      salary: "$100k - $140k",
      sponsored: false,
      category: "High-Paying Jobs",
      description: "Lead product development from concept to launch. Work closely with engineering and design teams.",
      address: "789 Pine St, Seattle, WA 98101",
      requirements: ["5+ years of product management experience", "Strong communication skills", "Agile methodology"],
      benefits: ["Health insurance", "Stock options", "Remote work options"],
      deadline: "2023-12-28",
    },
    {
      id: 10,
      logo: "https://i.pinimg.com/736x/72/3d/0a/723d0af616b1fe7d5c7e56a3532be3cd.jpg",
      title: "Senior UX Designer",
      location: "Austin, USA",
      type: "Full Time",
      salary: "$85k - $125k",
      sponsored: false,
      category: "High-Paying Jobs",
      description: "Design intuitive and user-friendly interfaces. Conduct user research and usability testing.",
      address: "321 Congress Ave, Austin, TX 78701",
      requirements: ["Portfolio of UX projects", "Proficiency in Figma", "5+ years of experience"],
      benefits: ["Remote work", "Paid time off", "Professional development budget"],
      deadline: "2023-12-31",
    },
    {
      id: 11,
      logo: "https://i.pinimg.com/736x/f9/9b/9b/f99b9b9d418550115061722fdf1b0a10.jpg",
      title: "Cloud Architect",
      location: "Chicago, USA",
      type: "Full Time",
      salary: "$110k - $150k",
      sponsored: false,
      category: "High-Paying Jobs",
      description: "Design and implement cloud infrastructure solutions. Ensure scalability and security.",
      address: "654 Wacker Dr, Chicago, IL 60601",
      requirements: ["AWS/GCP certification", "Experience with Kubernetes", "Strong problem-solving skills"],
      benefits: ["Health benefits", "Remote work", "Performance bonuses"],
      deadline: "2024-01-05",
    },
  
    // Part-Time Jobs
    {
      id: 12,
      logo: "https://i.pinimg.com/736x/0b/9e/73/0b9e738ab7001dd439b466ba59ec5a27.jpg",
      title: "Data Entry Clerk",
      location: "Remote",
      type: "Part Time",
      salary: "$20/hour",
      sponsored: false,
      category: "Part-Time Jobs",
      description: "Enter and update data in the company database. Ensure accuracy and efficiency.",
      address: "Remote",
      requirements: ["Fast typing speed", "Attention to detail", "Basic computer skills"],
      benefits: ["Flexible hours", "Work from home", "Training provided"],
      deadline: "2023-12-28",
    },
    {
      id: 13,
      logo: "https://i.pinimg.com/736x/0b/9e/73/0b9e738ab7001dd439b466ba59ec5a27.jpg",
      title: "Customer Service Representative",
      location: "Remote",
      type: "Part Time",
      salary: "$18/hour",
      sponsored: false,
      category: "Part-Time Jobs",
      description: "Assist customers with inquiries, complaints, and orders. Provide excellent customer service.",
      address: "Remote",
      requirements: ["Excellent communication skills", "Problem-solving skills", "Customer service experience"],
      benefits: ["Health benefits", "Paid training", "Work-life balance"],
      deadline: "2023-12-31",
    },
    {
      id: 14,
      logo: "https://i.pinimg.com/736x/0b/9e/73/0b9e738ab7001dd439b466ba59ec5a27.jpg",
      title: "Retail Associate",
      location: "Miami, USA",
      type: "Part Time",
      salary: "$15/hour",
      sponsored: false,
      category: "Part-Time Jobs",
      description: "Assist customers, manage inventory, and maintain store cleanliness. Flexible shifts.",
      address: "123 Ocean Dr, Miami, FL 33101",
      requirements: ["Retail experience", "Team player", "Ability to work weekends"],
      benefits: ["Employee discounts", "Flexible hours", "Training provided"],
      deadline: "2024-01-10",
    },
    {
      id: 15,
      logo: "https://i.pinimg.com/736x/0b/9e/73/0b9e738ab7001dd439b466ba59ec5a27.jpg",
      title: "Tutor",
      location: "Boston, USA",
      type: "Part Time",
      salary: "$25/hour",
      sponsored: false,
      category: "Part-Time Jobs",
      description: "Provide one-on-one tutoring in math and science for high school students.",
      address: "456 Beacon St, Boston, MA 02101",
      requirements: ["Teaching experience", "Strong knowledge of math/science", "Patience and communication skills"],
      benefits: ["Flexible schedule", "Work remotely", "Competitive pay"],
      deadline: "2024-01-15",
    },
    {
      id: 16,
      logo: "https://i.pinimg.com/736x/0b/9e/73/0b9e738ab7001dd439b466ba59ec5a27.jpg",
      title: "Delivery Driver",
      location: "Los Angeles, USA",
      type: "Part Time",
      salary: "$18/hour",
      sponsored: false,
      category: "Part-Time Jobs",
      description: "Deliver food and packages to customers. Must have a valid driver's license.",
      address: "789 Sunset Blvd, Los Angeles, CA 90001",
      requirements: ["Valid driver's license", "Own vehicle", "Good time management"],
      benefits: ["Flexible hours", "Tips", "Health insurance"],
      deadline: "2024-01-20",
    },
  
    // Remote Jobs
    {
      id: 17,
      logo: "https://i.pinimg.com/736x/0b/9e/73/0b9e738ab7001dd439b466ba59ec5a27.jpg",
      title: "Content Writer",
      location: "Remote",
      type: "Full Time",
      salary: "$50k - $70k",
      sponsored: false,
      category: "Remote Jobs",
      description: "Write engaging content for blogs, websites, and social media. Collaborate with the marketing team.",
      address: "Remote",
      requirements: ["Excellent writing skills", "SEO knowledge", "Portfolio of work"],
      benefits: ["Remote work", "Flexible hours", "Health benefits"],
      deadline: "2024-01-25",
    },
    {
      id: 18,
      logo: "https://i.pinimg.com/736x/0b/9e/73/0b9e738ab7001dd439b466ba59ec5a27.jpg",
      title: "Graphic Designer",
      location: "Remote",
      type: "Full Time",
      salary: "$60k - $80k",
      sponsored: false,
      category: "Remote Jobs",
      description: "Create visually appealing designs for digital and print media. Work with creative teams.",
      address: "Remote",
      requirements: ["Proficiency in Adobe Creative Suite", "Portfolio of work", "Attention to detail"],
      benefits: ["Remote work", "Paid time off", "Professional development"],
      deadline: "2024-01-30",
    },
    {
      id: 19,
      logo: "https://i.pinimg.com/736x/0b/9e/73/0b9e738ab7001dd439b466ba59ec5a27.jpg",
      title: "Social Media Manager",
      location: "Remote",
      type: "Full Time",
      salary: "$55k - $75k",
      sponsored: false,
      category: "Remote Jobs",
      description: "Manage social media accounts, create content, and analyze performance metrics.",
      address: "Remote",
      requirements: ["Social media experience", "Content creation skills", "Analytical mindset"],
      benefits: ["Remote work", "Flexible hours", "Health benefits"],
      deadline: "2024-02-05",
    },
    {
      id: 20,
      logo: "https://i.pinimg.com/736x/0b/9e/73/0b9e738ab7001dd439b466ba59ec5a27.jpg",
      title: "Virtual Assistant",
      location: "Remote",
      type: "Full Time",
      salary: "$40k - $60k",
      sponsored: false,
      category: "Remote Jobs",
      description: "Provide administrative support remotely. Manage schedules, emails, and tasks.",
      address: "Remote",
      requirements: ["Organizational skills", "Proficiency in Microsoft Office", "Communication skills"],
      benefits: ["Remote work", "Flexible hours", "Paid time off"],
      deadline: "2024-02-10",
    },
    {
      id: 21,
      logo: "https://i.pinimg.com/736x/b7/8a/4a/b78a4a086f8f9eb9bb4d6a4f3bc80f75.jpg",
      title: "Online Tutor",
      location: "Remote",
      type: "Full Time",
      salary: "$30/hour",
      sponsored: false,
      category: "Remote Jobs",
      description: "Teach students online in various subjects. Flexible hours and competitive pay.",
      address: "Remote",
      requirements: ["Teaching experience", "Strong subject knowledge", "Reliable internet connection"],
      benefits: ["Remote work", "Flexible hours", "Competitive pay"],
      deadline: "2024-02-15",
    },
  ];
  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  
  const JobListings = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const navigate = useNavigate();
  
    // Categorize jobs
    const sponsoredJobs = jobs.filter((job) => job.category === "Sponsored Jobs");
    const highPayingJobs = jobs.filter((job) => job.category === "High-Paying Jobs");
    const partTimeJobs = jobs.filter((job) => job.category === "Part-Time Jobs");
    const remoteJobs = jobs.filter((job) => job.category === "Remote Jobs");
  
    // Combine all jobs into one array
    const allJobs = [
      ...sponsoredJobs,
      ...highPayingJobs,
      ...partTimeJobs,
      ...remoteJobs,
    ];
  
    // Filter jobs based on selected category
    const filteredJobs = selectedCategory === 'All' 
      ? allJobs 
      : allJobs.filter((job) => job.category === selectedCategory);
  
    // Function to handle Apply Now click
    const handleApplyNow = () => {
      navigate('/apply'); // Navigate to the ApplyPage
    };
  
    return (
      <div className="container mx-auto p-4">
        {/* Message before the search bar */}
        <div className="mb-4 text-center">
          <p className="text-lg text-purple-800 font-semibold">
          Apply Your Best Job From Here
          </p>
        </div>
  
        {/* Category Dropdown */}
        <div className="mb-8">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Filter by Category
          </label>
          <div className="relative">
            <select
              id="category"
              name="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none w-full bg-white border border-gray-300 rounded-lg shadow-sm pl-4 pr-10 py-3 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 ease-in-out hover:border-gray-400 cursor-pointer"
            >
              <option value="All">All</option>
              <option value="Sponsored Jobs">Sponsored Jobs</option>
              <option value="Part-Time Jobs">Part-Time Jobs</option>
              <option value="Remote Jobs">Remote Jobs</option>
              <option value="High-Paying Jobs">High-Paying Jobs</option>
              
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
  
        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-purple-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4">
                <img src={job.logo} alt="Company Logo" className="w-12 h-12 rounded-lg" />
                <div>
                  <h3 className="text-xl font-semibold text-purple-800">{job.title}</h3>
                  <p className="text-sm text-purple-600">{job.location}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{job.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-sm text-purple-600">{job.salary}</p>
                <button
                  onClick={handleApplyNow} // Navigate to ApplyPage
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300 text-sm"
                >
                  Apply Now
                </button>
              </div>
              {job.sponsored && (
                <p className="text-xs text-purple-500 mt-2">
                  Sponsored by {job.sponsor}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default JobListings;