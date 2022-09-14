import React from "react"
import MotionWrap from "../wrappers/MotionWrap"
import SectionWrap from "../wrappers/SectionWrap"

function ContactMe() {
  const [values, setValues] = React.useState({
    message: "",
    subject: "",
    email: "",
  })
  const [failed, setFailed] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const { message, subject, email } = values

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true)
    const response = await fetch("http://localhost:8003/email", {
      method: "POST",
      body: JSON.stringify({ message, subject, email }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      setLoading(false)
      setFailed(true)
    } else {
      const respJSON = await response.json()
      setLoading(false)
      setFailed(respJSON.status)
    }
  }
  return (
    <section id="contact" className="max-w-[70%]">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Good Contacts Mean A Lot of Opportunities
      </h2>
      <div className="flex flex-col ">
        <div className="mb-4 flex md:flex-row flex-col justify-center">
          <div className="flex my-4 mr-4 justify-center">
            <label className="mr-2">Subject</label>
            <input
              onChange={handleChange}
              name="subject"
              value={subject}
              className="py-1 px-2 rounded shadow "
              placeholder="Subject"
            />
          </div>
          <div className="flex mr-4  my-4 justify-center">
            <label className="mr-2">Email</label>
            <input
              onChange={handleChange}
              name="email"
              value={email}
              placeholder="Email"
              type="email"
              className="py-1 px-2 rounded shadow "
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <label className="mr-2">Message</label>
          <textarea
            onChange={handleChange}
            value={message}
            name="message"
            placeholder="Message"
            className="py-1 px-2 rounded shadow w-full max-w-[500px] h-30 outline-none"
          />
        </div>
        {loading && (
          <div className="flex justify-center my-4 text-gray-500">
            Loading...
          </div>
        )}
        {failed && (
          <div className="flex justify-center my-4 text-red-500">
            Email could not be sent! Are you sure you provided a valid email?
          </div>
        )}
        <div className="flex justify-center mt-8">
          <button
            disabled={
              message.length < 1 ||
              subject.length < 1 ||
              email.length < 1 ||
              loading
            }
            onClick={handleClick}
            className="bg-blue-500   text-white max-w-[150px] py-1 px-2 delay-[150ms] rounded shadow shadow-blue-500 hover:translate-y-[-2px]  duration-300 hover:shadow-lg hover:shadow-blue-500">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}

export default MotionWrap(SectionWrap(ContactMe, "contact"))
