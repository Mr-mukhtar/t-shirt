import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <div className="m-4">
     <div className='w-70 m-5'>
     <h1 className='m-5'>About Us</h1>
      <p className="w-80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        scelerisque justo ac justo finibus blandit. Suspendisse potenti.
        Nullam nec cursus elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates molestiae eveniet vel quo facere ducimus voluptatum, explicabo itaque illo laborum eos tempore! Obcaecati, voluptatum, numquam labore corrupti nesciunt veritatis necessitatibus inventore explicabo iste facere doloremque eius nam tempore cupiditate unde, et asperiores vel magnam itaque vitae modi repudiandae fugit? Molestias quasi nulla incidunt quas similique voluptatem inventore maiores dignissimos eveniet quo, ex provident impedit consectetur voluptatibus rem possimus doloribus totam tenetur consequatur, natus iusto culpa amet? Incidunt ipsa vel architecto molestiae, excepturi est non accusamus esse optio, dolore possimus autem nobis, assumenda tenetur modi pariatur praesentium sint sunt. A.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, suscipit! Nostrum ut non error voluptates soluta adipisci ea architecto nulla optio odit inventore, eius voluptas eum odio. Dolores tempore debitis ad dolorem distinctio id, laborum fuga ipsa! Ipsum tempore autem facere temporibus iusto dicta natus labore accusamus numquam. Blanditiis, consectetur?<br/>Sed vulputate efficitur sapien, id
        vestibulum ligula malesuada nec.
      </p>
      <p>
        Mauris in justo auctor, tristique tellus vel, accumsan tellus.
        Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas.
      </p>

     </div>
     <Container className="bg-info text-white p-5 rounded text-center m-5 w-75">
        <div className="w-100">
          <h3>Contact Us</h3>
          <form>
            <div className="mb-5">
              <label htmlFor="name" className="form-label">Name:</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message:</label>
              <textarea className="form-control" id="message" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default About;
