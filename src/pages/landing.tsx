import LandinPageCard from "@/components/landing-page-card"
import { Button } from "@/components/ui/button"
import { Copyright } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

export default function Landing() {
  const navigate = useNavigate()
  return <main>
    <section className="p-8 min-h-screen">
      <div className="flex flex-col gap-12 md:flex-row md:items-center">
        <div>
          <h1 className="text-4xl lg:text-7xl font-bold">Empowering college voices</h1>
          <p className="mt-8 text-lg max-w-[40ch] text-neutral-600">Join the student pulse and drive the meaningful change on your college campus</p>
          <Button className="mt-8 rounded-full" onClick={() => navigate('/campaigns')}>Get involved Now</Button>
        </div>
        <div>
          <img src="./illustrations/1.svg" alt="student-conference" />
        </div>
      </div>
    </section>
    <section className="p-8">
      <div>
        <h2 className="text-3xl lg:text-5xl font-bold text-center my-8">Why?</h2>
      </div>
      <p className="max-w-[89ch] m-auto text-center leading-7 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam odio et enim tenetur, nulla esse quod similique officiis aliquid saepe unde rerum explicabo. Quas accusamus velit in, officiis eos, impedit accusantium rem minus amet expedita explicabo sequi porro consequuntur maxime exercitationem eum odit facere. Dolorem ut ducimus laudantium quibusdam a fuga recusandae, aliquid quod, delectus explicabo quaerat est? Ab dolor porro aut quisquam laborum beatae earum a impedit deserunt quibusdam eligendi veniam esse, omnis officiis quia placeat reiciendis! Ratione numquam, eaque minus quo harum ab aperiam deleniti ipsum aut maiores at dolor mollitia illum commodi voluptates earum voluptate blanditiis. Repudiandae ipsa accusamus voluptate voluptates deserunt, rem placeat nemo nisi in porro qui quisquam beatae tenetur amet! Velit hic soluta consectetur quos, minus harum libero impedit et. Quia nihil dolorum voluptate? Optio aliquid reprehenderit earum nobis rem neque ipsa porro corrupti sunt? Quasi odit aut architecto assumenda! Dolor cumque dolorum eum corporis magnam fugit, mollitia rem. Cupiditate eaque consectetur expedita dicta, sequi architecto eius fuga ut maxime quasi itaque ea tempore enim soluta rem optio commodi modi nam aliquid exercitationem? Quae saepe itaque, ipsam ullam aperiam illo temporibus facere nesciunt? Repellat expedita vero hic, alias pariatur iusto doloremque itaque quo?</p>
    </section>
    <section className="p-8 mt-20">
      <ul className="flex gap-4 flex-wrap justify-center">
        {[
          {
            title: "Explore our",
            description: "Report Concerns: Share your expereiences and help address pressing issues on your campus."
          },
          {
            title: "Start",
            description: "Collaborate with fellow students to launch impactful initiatives and make a real difference."
          },
          {
            title: "Provide",
            description: "Shape the future of your college experience by sharing by sharing valuable insights."
          }
        ].map(x => <LandinPageCard title={x.title} description={x.description} />)}
      </ul>
    </section>

    <section className="bg-black">
      <div className="flex px-8 flex-col  md:flex-row text-neutral-50 py-12 flex-wrap gap-16 md:justify-around">
        <div className="text-neutral-50">
          <div className="h-8 w-8 border-neutral-50 border my-4"></div>
          <p><Copyright className="inline-block" /> 2024 StudentPulse, Inc. <br />All rights reserved.</p>
        </div>
        <ul className="flex flex-col gap-4">
          <li className="font-medium">
            Navigate
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/campaigns">Campaigns</Link>
          </li>
          <li>
            <Link to="mailto:ajay">Contact</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li className="font-medium">Get Involved</li>
          <li>Report</li>
          <li>Join</li>
          <li>Volunteer</li>
          <li>
            <Link to="buymeacoffee.com/ajaymishra0">
              Donate
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li className="font-medium">Connect</li>

          <li>
            <Link to="mailto:">
              Email
            </Link>
          </li>
          <li>
            <Link to="https://x.com/AjayPra88777142">
              Twitter
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/ajay-prakash-mishra-638b23259/">
              Linkdin
            </Link>
          </li>
          <li>
            <Link to="https://github.com/ajay0993">
              Github
            </Link>
          </li>
        </ul>
      </div>
    </section>

  </main>
}

