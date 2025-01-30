import about from "../../assets/images/about.jpg";
const AboutHero = () => {
  return (
    <div className="relative bg-daz-blue py-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={about}
          alt="DAZ team supporting community"
        />
        <div className="absolute inset-0 bg-daz-blue mix-blend-multiply opacity-60"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About DAZ</h1>
        <p className="text-xl max-w-3xl mx-auto">
        DAZ is a Community Based-Non Profit Organization formed within an understanding of dementia and its related diseases being 
        overlooked in the health system here in Zimbabwe. It is a brainchild of 2 Co-Founders who drew inspiration from the stigma,
         ignorance and misdiagnosis associated with the condition and also a personal experience rendered.
        The Organization in partnership with the Ministry of Health and ChildCare is aimed at supporting the National Health Strategy
         through Creating awareness and Advocating for Prevention, Diagnosis, Treatment and Management of Dementia. Also, with a focus on diminishing the stigma and ignorance that currently exists whilst enhancing care and support to all the affected.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;