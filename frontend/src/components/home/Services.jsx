import React from "react";
import Review from "./components/Review";
import { FaUser } from 'react-icons/fa';

function Services() {
  const reviews = [
    {
      name: "Sabbir Hossain Abir",
      image:
        "https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-6/312703748_3478501779085230_1950780946585482384_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGkwHPUk95MDAfygYTyGWU7X3HO7w5t9apfcc7vDm31qpmla904Bn5UkCZ7ObAXeE6s97HwrxX59lb7HBl528sV&_nc_ohc=9c5en2xXM18AX-BdD7P&_nc_ht=scontent.fdac136-1.fna&oh=00_AfAzZsPJ2adgBqspzwz4T8kHfHPcm6E07csvy1wh1YMN-A&oe=63B51CB5",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis voluptate repellat eos, expedita culpa laboriosam vel fuga dolore unde quisquam earum explicabo aliquid, ducimus ullam saepe. Tempore, esse est. Possimus.",
    },
    {
      name: "Zakaria Bin Moti",
      image:
        "https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-6/302145899_156532100373085_2010151763920459654_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHrbcdLZRWuaHsXyYUqG_jpdhVNC4mwOVF2FU0LibA5UT8iradxAwDYoNQF4d_Zqs77lKP1RnqwDQ1gm3jJy1wC&_nc_ohc=4iFR4J4vO6MAX87zxFw&tn=hr3FB-mU0E1Jjxz3&_nc_ht=scontent.fdac136-1.fna&oh=00_AfAZfiNQl5VvdFFbumJkgwpxKH1VD595Nrna4L9g10pnoA&oe=63B40E67",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi modi quaerat accusantium consectetur eos soluta dolor quas nam quos veniam expedita architecto optio fugit possimus earum reiciendis rem, dicta nemo.",
    },
    {
      name: "Protick Saha",
      image:
        "https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-6/314706916_1532727437148345_5356733734063348288_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGi-Fe-pxZvDOWFXu32V4tIyyC-tKKPgdHLIL60oo-B0Y4ywceIpFaJENe1ExTPOaLyzEPhnSs8fZXHFPDZJxy-&_nc_ohc=Q8a2pz_MnqoAX9hf_B4&_nc_ht=scontent.fdac136-1.fna&oh=00_AfA5j5ghvAIVLgdwNYNYvmYOqkk_07CFFrWeyXtKF0_w7A&oe=63B41F9C",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia amet maiores magni commodi. Voluptatem aut aliquid mollitia sunt iusto sapiente numquam culpa illo recusandae sequi nam sed eaque, accusantium nesciunt!",
    },
  ];
  return (
    <section className="services" id="services">
      <h1 className="heading">
        {" "}
        Our Customers <span>Thoughts</span>{" "}
      </h1>

      <div className="box-container">
        {reviews.map((rev,index)=>(
            <Review key={index} image={rev.image} name={rev.name} description={rev.description}/>
        ))}
        
      </div>
    </section>
  );
}

export default Services;
