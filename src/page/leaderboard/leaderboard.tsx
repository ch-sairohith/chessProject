import React from "react";
import "./Leaderboard.css" 
const Leaderboard=()=>{
    const data=[{StudentName:"Arjun Varma",Grade:"Grade 8",UserName:"arjun_chess_master"},{},{}]

    return(
    <div>
        <div>
            <button>back</button>
        </div>
        <div>
            <h2>Player Management</h2>
            <button>Invite Students</button>
        </div>
        <div>
            <input type="text" placeholder="Search by student name.."/>
            <select>
                <option value="Grade 6">Grade 6</option>
                <option value="Grade 7"> Grade 7</option>
                <option value="Grade 8">Grade 8</option>
                <option value="Grade 9">Grade 9</option>
            </select>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Student Name</td>
                        <td>Grade</td>
                        <td>Chess.com Usernmae</td>
                        <td>Chess Rating</td>
                        <td>Record(W-L-D)</td>
                        <td>Games Played</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>);
   
}
export default Leaderboard; 