import hotelInventoryManagementSystem from "../assets/Projects/project-3-inventory-management.png";
import employeeManagementSystem from "../assets/Projects/project-7-Employee management.png";
import appointmentApp from "../assets/Projects/project-1-appointment.png";
import petNameGenerator from "../assets/Projects/project-2-petname-generatot.png";
import toDo from "../assets/Projects/project-4-todo-app.png";
import vehicleManagement from "../assets/Projects/project-5-vehicle-management.png";
import bloodDonation from "../assets/Projects/project-6-Blood donation.png";
import hotelManagement from "../assets/Projects/project-8-hotel-management.png";
import exerciseTracker from "../assets/Projects/project-10-exercise-tracker.png";
import moviesYTS from "../assets/Projects/project-9-moviesYTS.png";
const projects = {
  1: {
    title: "Movie Web Application",
    image: moviesYTS,
    description: (
      <>
        <p>
          Developed a dynamic app with Angular components, utilizing an existing
          API to retrieve movie details. Seamlessly extracting and displaying
          data from a movie database, this application offers a systematic
          presentation of film information, ensuring a user-friendly and
          organized viewing experience.
        </p>
      </>
    ),
    github: "https://github.com/IjaasMohamed/movies-app",
    //    demo: "https://netlify.com",
  },

  2: {
    title: "Employee Management System",
    image: employeeManagementSystem,
    description: (
      <>
        <p>
          Crafted an Angular 15 project leveraging Angular Material UI
          components for seamless CRUD operations. Designed a user-friendly
          interface enabling Create, Read, Update, and Delete functionalities,
          enhancing user experience and data management within the application.
        </p>
      </>
    ),
    github: "https://github.com/IjaasMohamed/Employee-Management-Application",
    //   demo: "https://netlify.com",
  },
  3: {
    title: "Doctor Appointment App",
    image: appointmentApp,
    description: (
      <>
        <p>
          Engineered a dynamic CRUD application using Kotlin in Android Studio,
          seamlessly integrated with Firebase. This robust system facilitates
          Create, Read, Update, and Delete operations, delivering a responsive
          and efficient mobile solution powered by Firebase's real-time database
          capabilities.
        </p>
      </>
    ),
    github: "https://github.com/IjaasMohamed/Appointment",
    //    demo: "https://netlify.com",
  },
  4: {
    title: "Petname Generator",
    image: petNameGenerator,
    description: (
      <>
        <p>
          Developed an AI-powered Pet Name Generator that dynamically creates
          names based on the inputted animal type. Utilizing AI, the app
          intelligently adjusts prompts according to the animal specified,
          offering personalized and unique pet name suggestions tailored to each
          user's beloved companion.{" "}
        </p>
      </>
    ),
    github: "https://github.com/IjaasMohamed/Pet-Name-Generator",
    //    demo: "https://netlify.com",
  },
  5: {
    title: "To-do App",
    image: toDo,
    description: (
      <>
        <p>
          Crafted a dynamic Todo Application leveraging Angular, enabling
          seamless task management and organization. This app offers a
          user-friendly interface for creating, updating, marking completion,
          and deleting tasks. Empowering users to efficiently track and manage
          their daily agendas.
        </p>
      </>
    ),
    github: "https://github.com/IjaasMohamed/Angular-Todo",
    //    demo: "https://netlify.com",
  },
  6: {
    title: "Driving School Management System",
    image: vehicleManagement,
    description: (
      <>
        <p>
          Developed a Driving School Management System as a university project,
          utilizing the powerful MERN (MongoDB, Express.js, React.js, Node.js)
          stack. This comprehensive system streamlines administrative tasks,
          student progress tracking, scheduling, and resource management for
          driving schools, ensuring efficient operations and enhanced user
          experience.
        </p>
      </>
    ),
    github: "https://github.com/SLIITITP/y2_s2_wd_it_01-itp_we_b02_26",
    //    demo: "https://netlify.com",
  },
  7: {
    title: "Blood Donation Campaign",
    image: bloodDonation,
    description: (
      <>
        <p>
          Designed a Blood Donation Campaign Registration System for a
          university project using basic HTML, CSS, and PHP. This intuitive
          platform allows members to register seamlessly for the campaign,
          fostering community engagement and facilitating a streamlined process
          for donors to participate in this noble cause.{" "}
        </p>
      </>
    ),
    github: "https://github.com/IjaasMohamed/Blood_Donation_Camp",
    //    demo: "https://netlify.com",
  },
  8: {
    title: "Hotel Reservation System",
    image: hotelManagement,
    description: (
      <>
        <p>
          Created an elegant Hotel Reservation System by synergizing Angular for
          the front-end, Spring Boot Java for robust back-end functionality, and
          REST API integration. Seamlessly crafted, this system offers a smooth
          booking experience, empowering users to reserve accommodations
          hassle-free. Complete with Swagger documentation, ensuring clarity and
          ease in API understanding and utilization.
        </p>
      </>
    ),
    github: "https://github.com/IjaasMohamed/Hotel-Management-System",
    //    demo: "https://netlify.com",
  },

  9: {
    title: "Hotel Inventory Management System",
    image: hotelInventoryManagementSystem,
    description: (
      <>
        <p>
          Developed a Java project enabling CRUD operations for a hotel's
          inventory. Managed inventory monetization, offering functionalities to
          add, edit, update stock counts, and modify product details.
          Implemented deletion for out-of-stock products, streamlining inventory
          management and operations.
        </p>
      </>
    ),
    github: "https://github.com/IjaasMohamed/OOP-PROJECT-Inventory-Management",
    //   demo: "https://netlify.com",
  },

  10: {
    title: "Exercise Tracker",
    image: exerciseTracker,
    description: (
      <>
        <p>
        MongoDB, Express, React, Node.js, and Mongoose to build a robust Exercise Details Tracker. This comprehensive application efficiently monitors and logs exercise routines, leveraging the power of these technologies to create a seamless and user-friendly experience in exercise tracking and management.
        </p>
      </>
    ),
    github: "https://github.com/IjaasMohamed/Exercise-Tracker",
    //   demo: "https://netlify.com",
  },
};

export default projects;
