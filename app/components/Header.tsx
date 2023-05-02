const Header = () => {
  return (
    <header className="min-w-screen relative h-96 bg-red-400">
      <img
        className="w-full h-full object-cover blur-sm"
        src="https://images.pexels.com/photos/6040547/pexels-photo-6040547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <div className="w-full md:w-full flex flex-col items-center absolute -bottom-40 md:-bottom-32 lg:-bottom-20 right-1/2 translate-x-1/2 translate-y-40">
        <div className="w-40 h-40 overflow-hidden rounded-full border border-white border-solid border-8">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&dpr=2"
            alt="hero-profile"
          />
        </div>
        <h2 className="text-3xl font-bold block text-center mt-2">Sanjay S</h2>
        <p className="font-light mt-2">Adventurer, Dreamer, builder! ✌</p>
        <p className="font-light mt-2 mx-4 md:mx-8 lg:mx-12 text-center">
          Hello! I am a Full stack software engineer focused on front-end with
          3+ years of experience in building for the web.
          <br /> Outside of work I love adventure sports, travelling and trying
          the new sushi place in town.
          <br /> Why this page you ask? because Instagram wasn&apos;t enough 😂
        </p>
      </div>
    </header>
  );
};

export default Header;
