import Image from "next/image";
import React from "react";
import logo from "@/assets/images/Isolation_about.png";
import { able } from "@/fonts";

function Page() {
  return (
    <div className="w-[90%] m-auto flex justify-center pb-10">
      <div className={`w-full ${able.className}`}>
        <Image
          src={logo}
          width={200}
          height={200}
          alt="test"
          className="m-auto py-10"
        />
        <h4 className="text-nhc py-2">About NHC National Housing Company</h4>
        <p>
          NHC was established in 2016 under Royal Decree No. 7262, on 8/2/1437
          AH to be the investment arm of the initiatives and programs of the
          Ministry of Municipal and Rural Affairs and Housing in the real
          estate, residential and commercial sectors. Then the Company came
          under state ownership in May of the year 2020, after which it entered
          a new stage in its journey and became an effective enabler of
          solutions for the Saudi real estate market. To become a leader in the
          real estate development sector and enable the public and private
          sectors to develop strategic partnerships with them. NHC is also keen
          to provide quality projects across urban communities with modern
          designs and various housing solutions at reasonable prices that keep
          pace with the aspirations of the future generation and achieve quality
          of life, in partnership with experienced and efficient real estate
          developers.
        </p>
        <h5 className="text-nhc pb-1 pt-8">National Housing Strategy</h5>
        <p>
          The NHC Strategy aims for the Company to be an enabler of the real
          estate supply system by empowering the private sector to develop the
          real estate market and improve the professionalism of the services
          provided in it, thus offering broader horizons for the Company in
          enhancing the sustainability of its business and the work of the real
          estate supply system.
        </p>
      </div>
    </div>
  );
}

export default Page;
