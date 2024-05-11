import React from "react";

export default function About() {
  return (
    <div
      className="flex flex-col w-full items-center mt-10 md:mt-14 "
      id="about"
    >
      <p className="text-4xl font-bold">About Us</p>
      <p className="text-gray-500 text-xl w-full md:w-8/12 text-center my-4">
      Our college is not just a place of learning but a hub of community engagement. 
      Through our commitment to social service,we actively collaborate with local groups 
      to make a tangible impact. Whether it's organizing clean-up drives, hosting 
        <br />
        awareness campaigns, or fundraising for community initiatives, our college fosters a culture of compassion and action.
        By amplifying the voices of local organizations and actively participating in their causes, 
        we strive to create meaningful change and build a stronger, more connected community together.
        <br />
      </p>
    </div>
  );
}
