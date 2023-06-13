const HeroCard = () => {
  return (
    <div className="w-full md:w-full flex flex-col items-center">
      <div className="w-40 h-40 overflow-hidden rounded-full border border-4 border-white border-solid">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&dpr=2"
          alt="hero-profile"
        />
      </div>
      <h2 className="text-3xl font-bold block text-center mt-2 subpixel-antialiased">
        Sanjay S
      </h2>
      <p className="text-sm lg:text-base font-light mt-2">
        Adventurer, Dreamer, builder! ✌
      </p>
      <p className="text-sm lg:text-base font-light mt-2 mx-10 md:mx-8 lg:mx-6 text-center">
        Hello! I am a Full stack software engineer focused on front-end with 4 
        years of experience in building for the web.
        <br /> Outside of work I love adventure sports, travelling and trying
        the new sushi place in town.
        <br /> Why this page you ask? because Instagram wasn&apos;t enough 😂
      </p>
    </div>
  );
};

export default HeroCard;
