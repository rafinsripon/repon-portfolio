import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import './Counter.css';

const Counter = ({ className, ...rest }) => {
  const [viewCounter, setViewCounter] = useState(false);
  return (
    <div className="counterup py-28 bgtop bgbottom">
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-6">
      <div className="text-center lg:pb-0 md:pb-0 pb-16">
        <div className="text-primary text-4xl font-extrabold font-['Jost'] mb-4" data-number="5,240">
          <CountUp {...rest} start={viewCounter ? null : 0} end={5240}>
            {({countUpRef}) => {
                return (
                    <VisibilitySensor
                    active = {!viewCounter}
                    onChange = {isVisible => {
                        if(isVisible){
                            setViewCounter(true)
                        }
                    } }
                    >
                    <span className="number" ref={countUpRef}></span>
                    </VisibilitySensor>
                )
            }}
            
          </CountUp>
        </div>
        <h3 className="text-white font-bold">Hours of Works</h3>
      </div>
      <div className="text-center lg:pb-0 md:pb-0 pb-16">
        <div className="text-primary text-4xl font-extrabold font-['Jost'] mb-4" data-number="50">
          <CountUp {...rest} start={viewCounter ? null : 0} end={50}>
            {({countUpRef}) => {
                return (
                    <VisibilitySensor
                    active = {!viewCounter}
                    onChange = {isVisible => {
                        if(isVisible){
                            setViewCounter(true)
                        }
                    } }
                    >
                    <span className="number" ref={countUpRef}></span>
                    </VisibilitySensor>
                )
            }}
            
          </CountUp>
        </div>
        <h3 className="text-white font-bold">Complate Projects</h3>
      </div>
      <div className="text-center">
        <div className="text-primary text-4xl font-extrabold font-['Jost'] mb-4" data-number="37">
          <CountUp {...rest} start={viewCounter ? null : 0} end={37}>
            {({countUpRef}) => {
                return (
                    <VisibilitySensor
                    active = {!viewCounter}
                    onChange = {isVisible => {
                        if(isVisible){
                            setViewCounter(true)
                        }
                    } }
                    >
                    <span className="number" ref={countUpRef}></span>
                    </VisibilitySensor>
                )
            }}
            
          </CountUp>
        </div>
        <h3 className="text-white font-bold">Happy Clients</h3>
      </div>
      <div className="text-center">
        <div className="text-primary text-4xl font-extrabold font-['Jost'] mb-4" data-number="16">
          <CountUp {...rest} start={viewCounter ? null : 0} end={16}>
            {({countUpRef}) => {
                return (
                    <VisibilitySensor
                    active = {!viewCounter}
                    onChange = {isVisible => {
                        if(isVisible){
                            setViewCounter(true)
                        }
                    } }
                    >
                    <span className="number" ref={countUpRef}></span>
                    </VisibilitySensor>
                )
            }}
            
          </CountUp>
        </div>
        <h3 className="text-white font-bold">Awards Winning</h3>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Counter;
