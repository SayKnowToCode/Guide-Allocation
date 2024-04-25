import React from 'react';


const TeamRequest = ({ teamInfo }) => {
    <>

        {teamInfo.map((team) => {

            return (
                <>
                    <p>Hello</p>
                    <p>{team.teamName}</p>
                </>
            )
        })};


    </>

};

export default TeamRequest;
