import React from 'react';
import './Eval.css';

class MarksBox extends React.Component {
    render() {
        const { phase, facultyMarks, expertMarks } = this.props;
        const averageMarks = (facultyMarks + expertMarks) / 2;

        return (
            <div className="marks-box">
                <h2>{phase}</h2>
                <div>
                    <strong>Faculty Marks:</strong> {facultyMarks}
                </div>
                <div>
                    <strong>Expert Marks:</strong> {expertMarks}
                </div>
                <div>
                    <strong>Average Marks:</strong> {averageMarks}
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <MarksBox className="ph" phase="Phase 1" facultyMarks={80} expertMarks={85} />
                <MarksBox className="ph" phase="Phase 2" facultyMarks={75} expertMarks={90} />
                <MarksBox className="ph" phase="ESE1" facultyMarks={85} expertMarks={80} />

                <MarksBox className="ph" phase="Phase 3" facultyMarks={80} expertMarks={85} />
                <MarksBox className="ph" phase="Phase 4" facultyMarks={75} expertMarks={90} />
                <MarksBox className="ph" phase="ESE2" facultyMarks={85} expertMarks={80} />
            </div>



        );
    }
}

export default App;
