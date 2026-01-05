/**
 * Game Configuration
 * Replace placeholder paths with your actual assets
 */

const GAME_CONFIG = {
    // Video paths - replace with your actual video files
    videos: {
        idle: 'assets/videos/idle.mp4',       // Idle/attract loop video
        success: 'assets/videos/success.mp4', // Win video (all 9 answers correct)
        failure: 'assets/videos/failure.mp4'  // Lose video (any answer wrong)
    },

    // Timing configuration (in milliseconds)
    timing: {
        fadeTransition: 500,      // Fade transition duration
        resultVideoDelay: 10000,  // Delay after failure video before returning to idle
        answerRevealDelay: 500,   // Delay before showing answer result
        incorrectFeedbackDuration: 1400 // Duration for wrong-answer glow fade
    },

    // Display-specific content configuration
    displays: {
        1: {
            background: 'assets/images/bg.png',   // Background image for display 1
            image: 'assets/images/display1.png',  // Replace with your image
            title: '',           // Replace with your title
            answers: [
                { id: 'a1', image: 'assets/images/answers/d1_a1.png', correct: true },
                { id: 'a2', image: 'assets/images/answers/d1_a2.png', correct: false },
                { id: 'a3', image: 'assets/images/answers/d1_a3.png', correct: true },
                { id: 'a4', image: 'assets/images/answers/d1_a5.png', correct: false },
                { id: 'a5', image: 'assets/images/answers/d1_a4.png', correct: true },
                { id: 'a6', image: 'assets/images/answers/d1_a6.png', correct: false }
            ],
            // Which 3 answers are correct (must match 3 answers with correct: true)
            correctAnswers: ['a1', 'a3', 'a5']
        },
        2: {
            background: 'assets/images/bg1.png',   // Background image for display 2
            image: 'assets/images/display2.png',  // Replace with your image
            title: '',           // Replace with your title
            answers: [
                { id: 'b1', image: 'assets/images/answers/d2_a1.png', correct: false },
                { id: 'b2', image: 'assets/images/answers/d2_a2.png', correct: true },
                { id: 'b3', image: 'assets/images/answers/d2_a3.png', correct: true },
                { id: 'b4', image: 'assets/images/answers/d2_a4.png', correct: false },
                { id: 'b5', image: 'assets/images/answers/d2_a5.png', correct: false },
                { id: 'b6', image: 'assets/images/answers/d2_a6.png', correct: true }
            ],
            correctAnswers: ['b2', 'b3', 'b6']
        },
        3: {
            background: 'assets/images/bg2.png',   // Background image for display 3
            image: 'assets/images/display3.png',  // Replace with your image
            title: '',           // Replace with your title
            answers: [
                { id: 'c1', image: 'assets/images/answers/d3_a1.png', correct: true },
                { id: 'c2', image: 'assets/images/answers/d3_a2.png', correct: false },
                { id: 'c3', image: 'assets/images/answers/d3_a3.png', correct: true },
                { id: 'c4', image: 'assets/images/answers/d3_a4.png', correct: true },
                { id: 'c5', image: 'assets/images/answers/d3_a5.png', correct: false },
                { id: 'c6', image: 'assets/images/answers/d3_a6.png', correct: false }
            ],
            correctAnswers: ['c1', 'c3', 'c4']
        }
    }
};

// Export for module systems (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GAME_CONFIG;
}
