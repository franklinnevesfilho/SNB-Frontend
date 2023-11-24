import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaStar } from "react-icons/fa6";
import Book from "../assets/cbook.jpg";
import { FaStarHalf } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import Card from "../components/Card";

const SinglePage = () => {
  return (
    <div>
      <Navbar />

      <div className="w-[90%] md:w-[80%] m-auto py-[2vmax] flex flex-col gap-[1.5vmax]">
        <div className="text-[3vmax] font-bold">
          Virtual Mineral Box Identification Lab Kit, Properties of Minerals
          Practice
        </div>
        <div className="text-yellow-300 text-[2vmax] flex items-center">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
          <div className="text-black ml-2 text-[1.5vmax]">4.7 (67 ratings)</div>
        </div>

        <div className="flex justify-between">
          <div className="w-full lg:w-[70%] flex flex-col gap-[3vmax]">
            <div className="flex flex-wrap gap-[2vmax]">
              <div className=" flex flex-col gap-[2vmax]">
                <img
                  src={Book}
                  alt=""
                  className="md:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[400px] border-2 border-black object-cover rounded-lg"
                />
                <div className="text-[1.5vmax] font-bold flex gap-[1vmax] text-white justify-center items-center bg-black p-[1vmin] rounded-full">
                  {" "}
                  <IoSearchOutline /> View Preview
                </div>
              </div>
              <div className="flex flex-col text-[1.3vmax] gap-[1vmax]">
                <div>
                  <div>GRADE LEVEL</div>
                  <div>6th - 9th</div>
                </div>
                <div>
                  <div>SUBJECTS</div>
                  <div>Science, Earth Sciences, General Science </div>
                </div>
                <div>
                  <div>RESOURCE TYPE</div>
                  <div>Ativities</div>
                </div>
                <div>
                  <div>PAGES</div>
                  <div>22 pages</div>
                </div>
              </div>
            </div>

            <div className="flex gap-[1vmax] py-[1vmax] border-y-[1px] border-black">
              <img
                src="https://ecdn.teacherspayteachers.com/thumbuserhome/Tchrbrowne-1695812351/6656.jpg"
                alt=""
                className="h-[4vmax] rounded-full"
              />
              <div className="flex flex-col gap-[1vmin] text-[1vmax] ">
                <div className="font-bold">BodenKelly Science</div>
                <div>228 Followers </div>
              </div>
            </div>

            <div className="md:hidden top-0 h-fit flex flex-col items-center gap-[1vmax] p-[2vmax] border-[1px] border-[#a0a0a0]">
            <div className="text-[2.5vmax]">$5.00</div>
            <button className="bg-green-400 p-[1vmax] px-[4vmax] rounded-full">
              Add One to Cart
            </button>
            <button className="border-black border-[1px] p-[1vmin] px-[3vmax] rounded-full">
              Share
            </button>
            <button className="border-black border-[1px] p-[1vmin] px-[1vmax] rounded-full">
              Add in Wishlist
            </button>
          </div>

            <div className="flex flex-col gap-[2vmax]">
              <div className="text-[2vmax] font-semibold">Desscription</div>
              <div className="flex flex-col gap-2 text-[1.3vmax]">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptates non voluptas obcaecati tenetur, corrupti quis iure
                  at et numquam eligendi reprehenderit atque autem reiciendis
                  facilis! Cupiditate eveniet, obcaecati dignissimos iure fugiat
                  incidunt aut reprehenderit distinctio officiis facilis, nemo
                  magni nam! Officiis incidunt autem labore asperiores!
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Beatae, blanditiis a pariatur commodi exercitationem nisi,
                  dicta quidem nihil ipsa nostrum sequi odit eaque? Natus.
                </p>

                <p className="font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                  volup
                </p>
              </div>
            </div>

            <div>
              <div className="text-[2vmax] font-semibold">Reviews</div>
              <div className="flex flex-col gap-[2vmax] my-[1vmax]">
                <div className="border-b-[1px] border-black flex flex-col gap-[1vmax] p-[1vmax]">
                  <div className="flex gap-[1vmax] py-[1vmax] ">
                    <img
                      src="https://ecdn.teacherspayteachers.com/thumbuserhome/Bodenkelly-Science-1696850712/9144029.jpg"
                      alt=""
                      className="h-[4vmax] rounded-full"
                    />
                    <div className="flex flex-col gap-[1vmin] text-[1vmax]">
                      <div className="font-bold">BodenKelly Science</div>
                      <div>April 24, 2023 </div>
                    </div>
                  </div>
                  <div className="text-yellow-300 text-[1.5vmax] flex items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                    <div className="text-black ml-2 font-bold text-[1.2vmax]">
                      4.5 Extremely Satisfied
                    </div>
                  </div>
                  <p className="text-[1vmax]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Architecto quae, sequi fugit sapiente sint reprehenderit
                    accusantium corporis pariatur tempore! Optio, aliquid 
                  </p>
                </div>
                
                <div className="border-b-[1px] border-black flex flex-col gap-[1vmax] p-[1vmax]">
                  <div className="flex gap-[1vmax] py-[1vmax] ">
                    <img
                      src="https://ecdn.teacherspayteachers.com/thumbuserhome/Tchrbrowne-1695812351/6656.jpg"
                      alt=""
                      className="h-[4vmax] rounded-full"
                    />
                    <div className="flex flex-col gap-[1vmin] text-[1vmax] ">
                      <div className="font-bold">BodenKelly Science</div>
                      <div>April 24, 2023 </div>
                    </div>
                  </div>
                  <div className="text-yellow-300 text-[1.5vmax] flex items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                    <div className="text-black ml-2 font-bold text-[1.2vmax]">
                      4.5 Extremely Satisfied
                    </div>
                  </div>
                  <p className="text-[1vmax]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Architecto quae, sequi fugit sapiente sint reprehenderit
                    accusantium corporis pariatur tempore! Optio, aliquid quos.
                    Fugit, voluptatibus?
                  </p>
                </div>
                
              </div>
            </div>
          </div>
          <div className="md:sticky top-0 h-fit hidden md:flex flex-col items-center gap-[1vmax] p-[2vmax] border-[1px] border-[#a0a0a0]">
            <div className="text-[2.5vmax]">$5.00</div>
            <button className="bg-green-400 p-[1vmax] px-[4vmax] rounded-full">
              Add One to Cart
            </button>
            <button className="border-black border-[1px] p-[1vmin] px-[3vmax] rounded-full">
              Share
            </button>
            <button className="border-black border-[1px] p-[1vmin] px-[1vmax] rounded-full">
              Add in Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="w-[80%] m-auto flex flex-col gap-2 py-[2vmax]">
        <div className="font-bold text-[1.5rem]">
          Explore Elementary School Resources
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2vmax] p-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SinglePage;
