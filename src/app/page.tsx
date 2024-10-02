import Header from "../app/components/header"
import Link from "next/link";
import Image from "next/image"
import ProfileImage from "../app/public/hand.jpg";

export default function HomePage() {
  return (
      <div>
          <div className="profile-info">
              <div className="info-text">
                  <h1 className="name"><span>Warisha Turab</span></h1>
                  <h4 className="title"><span>Passionate about web development</span></h4>
                  <p className="heading"><span>I'm a  (Web developer)</span></p>
              </div>

              <Image src={ProfileImage} alt="Profile" width={300} height={200} quality={100} />
          </div>

         {/* resume buttons  */}
          <div className="total">
              <div className="resume">
              <Link href={"/resume"}>
                  <button>My Resume</button>
                  </Link>
                  <div className="skills">
                  <Link href={"/skills"}>
                    <button>My Skills</button>
                    </Link>
                  </div>
              </div>
          </div>
      </div>
  );
}

