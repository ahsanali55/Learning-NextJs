import { cookies } from "next/headers";
import Link from "next/link";

// Used to make the static page behaves like a dynamic page
// export const dynamic = "force-dynamic";

// static page behaves like a static page
// export const dynamic = "force-static";

// Let Next.js decide based on the usage like searchParams or cookies
export const dynamic = "auto"; // it allow to running dynamically

// export const dynamic = "error";


const Services = async({searchParams}) => {

 // Used to make the static page behaves like a dynamic page
  // await searchParams;

  // Used to make the static page behaves like a dynamic page
  const search = await searchParams;
  console.log(search)
  
  // Used to make the static page behaves like a dynamic page
  const myCookies = await cookies();
  console.log(myCookies);


  console.log("Running services component.");
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link active">
              Services
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Our Services</h1>
        <ul className="services-list">
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>Consulting Services</li>
          <li>Digital Marketing</li>
        </ul>
      </div>
    </>
  );
};

export default Services;
