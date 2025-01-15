import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Asegúrate de instalar react-icons

const TestimonialsSlider = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Asegúrate de habilitar las flechas
    prevArrow: (
      <button className="slick-prev text-3xl absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
        <FaChevronLeft style={{ color: "#2d3748", fontSize: "24px" }} />
      </button>
    ),
    nextArrow: (
      <button className="slick-next text-3xl absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
        <FaChevronRight style={{ color: "#2d3748", fontSize: "24px" }} />
      </button>
    ),
  };

  interface Testimonial {
    name: string;
    company: string;
    feedback: string;
    link: string;
    image: string;
  }

  const testimonials: Testimonial[] = t("testimonials.list", {
    returnObjects: true,
  }) as Testimonial[];

  return (
    <section id="testimonials" className="bg-gray-100 h-full py-16">
      <div className="px-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          {t("testimonials.title")}
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial: Testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-lg shadow-lg p-6 mx-auto text-center "
            >
              <a
                href={testimonial.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full group "
              >
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} photo`}
                  className="w-12 h-12 rounded-full mx-auto mb-4 "
                />
                <h3 className="text-xl font-semibold text-gray-700 group-hover:text-purple">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-purple mb-2 group-hover:text-pink">
                  {testimonial.company}
                </p>
                <p className="text-gray-700 mb-4 group-hover:text-purple">
                  "{testimonial.feedback}"
                </p>
                <div className="flex justify-center">
                  <span className="text-yellow-500 text-lg">★★★★★</span>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
