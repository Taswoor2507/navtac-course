import React from "react";

const OwnerForm = ({handleNext, handleChange , formData}) => {
  return (
    <div className=" p-4 flex flex-col gap-3 text-white">
      <div className="fullName">
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </g>
          </svg>
          <input
            type="text"
            name="fullName"
            onChange={(e)=>{handleChange(e)}}
            required
            placeholder="Username"
            value={formData.fullName}
          />
        </label>
      </div>
      <div className="email">
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input type="email" value={formData.email}   onChange={(e)=>{handleChange(e)}}   name="email" placeholder="test@gmail.com" required />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>
      </div>
      <div className="phone">
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <g fill="none">
              <path
                d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          <input
            type="tel"
            className="tabular-nums"
            required
            placeholder="Phone"
            name="phone"
            onChange={(e)=>{handleChange(e)}}
            value={formData.phone}
          />
        </label>
      </div>
      <div className="password">
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <input
            type="password"
            required
            placeholder="Password"
            name="password"
            onChange={(e)=>{handleChange(e)}}
            value={formData.password}
          />
        </label>

      </div>
      <div className="plan">
        <select 
          name="plan" 
          value={formData.plan || ''} 
          onChange={(e)=>{handleChange(e)}} 
          className="select"
        >
          <option value="" disabled>Pick a plan</option>
          <option value="free">Free</option>
          <option value="silver">Silver</option>
          <option value="gold">Gold</option>
        </select>
      </div>
      <div>
        <button className="btn btn-neutral"   onClick={(()=>{handleNext()})}>Next</button>
      </div>
    </div>
  );
};

export default OwnerForm;
