import React from "react";

export default function CoreTeam() {
  const cc = [
    {
      avatar: "/team/Sahil-Aggarwal.jpg",
      name: "Sahil-Aggarwal",
      position: "CEO",
    },
    {
      avatar: "/team/Soumya-Aggarwal.jpg",
      name: "Soumya-Aggarwal",
      position: "COO",
    },
    {
      avatar: "/team/Sanjeev-Kumar.jpg",
      name: "Sanjeev-Kumar",
      position: "Dean and Professor",
    },
    {
      avatar: "/team/Alka-Siwach.jpg",
      name: "Alka-Siwach",
      position: "Coordinator",
    },
  ];
  return (
    <div className="flex flex-col w-full items-center my-10 md:my-14 " id="team">
      <p className="text-4xl font-bold">Core Team</p>
      <p className="text-gray-500 text-xl w-full md:w-8/12 text-center my-4">
      People who are leading the program.
      </p>
      <div className="w-max-[90vw] w-full md:w-8/12 overflow-x-auto">
        <div className="flex flex-row w-max flex-wrap">
          {/* Card */}
          {cc.map((cc, index) => (
            <div
              key={index}
              className="flex flex-col items-center m-2 p-4 py-10 brightness-90 rounded-md w-56"
            >
              <img
                src={cc.avatar}
                alt=""
                className="rounded-full w-20 h-20 md:w-28 md:h-28 object-cover ring ring-zinc-200"
              />
              <p className="font-medium mt-2 text-lg opacity-75">{cc.name}</p>
              <p className="text-zinc-500">{cc.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
