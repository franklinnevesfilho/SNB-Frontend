
const Footer = () => {
  return (
    <div className="md:h-[50vh] bg-black flex flex-col items-center">

        <div className="w-[80%] h-[50%] m-auto flex flex-col md:flex-row gap-[3vmax] md:gap-0 justify-between md:items-center text-white p-[4vmax]">

            <div className="max-w-[80%] md:max-w-[40%]  flex flex-col items-start gap-[2vmax]">
                <img className="h-[2vmax]" src="https://static1.teacherspayteachers.com/tpt-frontend/releases/production/current/4d8a3b42e4bfccb3f613.svg" alt="" />
                <p className="text-[1.5vmax]">TPT is the largest marketplace for PreK-12 resources, powered by a community of educators.</p>

            </div>

            <div className="flex flex-col gap-[1.5vmax]">
                <div className="text-[1.6vmax] uppercase">About</div>
                <ul className="flex md:flex-col gap-[1vmax] text-[1.2vmax]">
                    <li>Press</li>
                    <li>Blog</li>
                    <li>We're hiring</li>
                    <li>Who we are</li>
                </ul>
            </div>

            <div className=" flex flex-col gap-[1.5vmax]">
                <div className="text-[1.6vmax] uppercase">Support</div>
                <ul className="flex flex-col gap-[1vmax] text-[1.2vmax]">
                    <li>Help & FAQ</li>
                    <li>Privacy policy</li>
                    <li>Privacy policy</li>
                    <li>Terms of service</li>
                    <li>Tell us what you think</li>
                </ul>
            </div>

        </div>

        <div className="flex justify-center text-white text-[1.5vmax] py-[2vmax]">© 2023 by Teacher Synergy, LLC</div>

    </div>
  )
}

export default Footer