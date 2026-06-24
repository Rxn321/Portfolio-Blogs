import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center">

      <img
        src={profile}
        alt="Profile"
        className="w-40 h-40 rounded-full object-cover"
      />

      <h1 className="text-4xl font-bold mt-6">
        Your Name
      </h1>

      <p className="mt-3 text-gray-500 max-w-md">
        Software developer building simple,
        clean, and meaningful projects.
      </p>

    </section>
  );
}

export default Hero;