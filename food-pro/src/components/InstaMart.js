import React, { useState } from 'react'

const Section = ({title, desc, isVisible, setIsVisible, hideSection}) => {
  return (
    <div className="my-2 bg-slate-600 text-[#fff] p-5 border text-left">
      <h3 className="font-bold text-xl mb-3">{title}</h3>
      <div className="my-2">
        {isVisible ? (
          <>
            <button onClick={() => hideSection()} className="m-1 underline">
              Hide
            </button>
            <p>{desc}</p>
          </>
        ) : (
          <button onClick={() => setIsVisible()} className="m-1 underline">
            Show
          </button>
        )}
      </div>
    </div>
  )
}

const InstaMart = () => {

  const [visibleSection, setVisibleSection] = useState("about");

  return (
    <>
      <div className="container mx-auto max-w-7xl p-28 text-center">
        <Section 
          title="About Section"
          desc="Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, Let's do this."
          isVisible={visibleSection === "about"}
          setIsVisible={() => setVisibleSection("about")}
          hideSection={() => setVisibleSection("")}
        />
        <Section 
          title="Team Section"
          desc="We build innovative products & solutions that deliver unparalleled convenience to urban consumers.
          The best part? Every bit of your work at Swiggy will help elevate the lives of our users across India."
          isVisible={visibleSection === "team"}
          setIsVisible={() => setVisibleSection("team")}
          hideSection={() => setVisibleSection("")}
        />
        <Section 
          title="Careers Section"
          desc="Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, Let's do this."
          isVisible={visibleSection === "careers"}
          setIsVisible={() => setVisibleSection("careers")}
          hideSection={() => setVisibleSection("")}
        />
      </div>
    </>
  )
}

export default InstaMart;
