const About = () => {
  return (
    <>
      <div className="container mx-auto py-4">
        <div className="my-4">
          <h1 className="font-bold text-xl">About Me!</h1>
        </div>
        <div className="grid grid-cols-2">
          {/* Personal Profile */}
          <div className="text-lg">
            <p>
              I am a highly motivated creative student able to demonstrate a
              high work ethic. I am a responsible individual who possesses an
              enthusiastic personality. <br /> I can perform efficiently and
              have an optimistic attitude towards my mistakes and corrections
              which in the future, can benefit me in making fewer errors. <br />
              I am also an open minded and curious individual who likes to learn
              new things. In my free time I enjoy spending time with friends and
              working out at the gym as it is a hobby I can focus on and helps
              clear my mind of any stress.
            </p>

            <br />

            <p>
              In previous employment I have been both a Supervisor and an Acting
              Manager in the retail industry, so dealing with high stress
              situations and deadlines has become second nature to me. <br /> I
              am very passionate about the I.T world, this postion has been a
              dream of mine since I was very young and I take it very seriously.
            </p>
          </div>

          {/* Image */}
          <img
            className="ms-44 rounded-full w-96"
            src="https://media.licdn.com/dms/image/D4E03AQGNOrtSJLamiA/profile-displayphoto-shrink_800_800/0/1701087198853?e=1708560000&v=beta&t=pQH8uMPr3K_2tIakNjyG7iF_nudgI63YKrA41RaSf2A"
            alt=""
          />
        </div>
        {/* End of Personal Profile */}

        {/* Skills */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h1 className="font-bold text-xl mb-4">Skills and Interests</h1>
            <div className="text-lg">
              <p>
                I am very interested in the I.T sector and hope to increase my
                knowledge in all things computers both inside and outside of
                college.
                <br /> My preffered profession within the I.T sector would be in
                the design area, Somewhere in the Game Design / Development
                field or in the Front-End Web / Application area. <br /> I have
                been a passionate gamer since I can remember, but have found a
                passion and enjoyment for design areas outside of only gaming,
                such as websites and apps, by simply trying new things in
                college.
              </p>

              <br />

              <p>
                I have limited experience experience with the Unity game engine
                and with C# but I am spending time learning how to use it in my
                spare time with a personal project I have been working on.{" "}
                <br /> I am also begining to learn Blender in conjunction with
                this project.
              </p>

              <br />
            </div>
          </div>

          {/* List of Languages */}
          <div>
            <p className="text-lg mt-11">
              So far, I have the most experince in Front-End and Back-End Web
              Development and have become proficient in the following
              langauages:
              <br />
            </p>
            <div className="flex">
              <div className="font-bold mt-3 mx-16">
                <header className="ms-12">Programatic Languages:</header>
                <ul className="list-disc mt-2 ms-12">
                  <li>HTML / CSS</li>
                  <li>MySQL / PhpMyAdmin</li>
                  <li>JavaScript / p5.js / React.js</li>
                  <li>Java / Processing</li>
                  <li>PHP / Laravel</li>
                </ul>
              </div>

              <div className="font-bold mt-3 mx-16">
                <header className="ms-3">Design Languages:</header>
                <ul className="list-disc mt-2 ms-3">
                  <li>BootStrap (HTML & React.js)</li>
                  <li>Tailwind (HTML & React.js)</li>
                  <li>Semantic (React.js)</li>
                  <li>DaisyUI (React.js)</li>
                  <li>Mantine (React.js)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
