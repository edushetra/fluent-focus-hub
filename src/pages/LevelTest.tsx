import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { CheckCircle, BookOpen, Users, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const questions = [
  {
    id: 1,
    question: "I _____ to the market yesterday.",
    options: ["go", "went", "going", "will go"],
    correct: 1
  },
  {
    id: 2,
    question: "Choose the correct sentence:",
    options: [
      "He don't like coffee",
      "He doesn't like coffee", 
      "He not like coffee",
      "He isn't like coffee"
    ],
    correct: 1
  },
  {
    id: 3,
    question: "The meeting has been _____ to next week.",
    options: ["postponed", "postpone", "postponing", "postpones"],
    correct: 0
  },
  {
    id: 4,
    question: "If I _____ you, I would study harder.",
    options: ["am", "was", "were", "will be"],
    correct: 2
  },
  {
    id: 5,
    question: "Choose the most appropriate response: 'Could you help me with this?'",
    options: [
      "Yes, I could",
      "Of course, I'd be happy to help",
      "Maybe I will",
      "I think so"
    ],
    correct: 1
  },
  {
    id: 6,
    question: "The project was completed _____ the deadline.",
    options: ["ahead of", "ahead from", "before of", "in front"],
    correct: 0
  },
  {
    id: 7,
    question: "Which sentence is most formal?",
    options: [
      "Can you send me the report?",
      "Could you please send me the report?",
      "Would you be so kind as to send me the report?",
      "Send me the report, please."
    ],
    correct: 2
  },
  {
    id: 8,
    question: "The word 'comprehensive' means:",
    options: [
      "difficult to understand",
      "including everything",
      "very expensive",
      "requiring much time"
    ],
    correct: 1
  },
  {
    id: 9,
    question: "Choose the correct passive voice: 'The team completed the project.'",
    options: [
      "The project completed by the team",
      "The project was completed by the team",
      "The project has completed by the team",
      "The project is completed by the team"
    ],
    correct: 1
  },
  {
    id: 10,
    question: "In a business presentation, which phrase is most appropriate to introduce a new topic?",
    options: [
      "Now I want to talk about...",
      "Let's move on to...",
      "I would like to draw your attention to...",
      "Next thing is..."
    ],
    correct: 2
  }
];

const programRecommendations = {
  beginner: {
    level: "Beginner",
    description: "You have a basic understanding of English but need to build confidence and fluency.",
    programs: ["Big Group Classes", "Small Group Classes"],
    color: "bg-orange-100 border-orange-200"
  },
  intermediate: {
    level: "Intermediate", 
    description: "You can communicate in English but want to improve fluency and professional communication.",
    programs: ["Small Group Classes", "1:1 Classes"],
    color: "bg-blue-100 border-blue-200"
  },
  advanced: {
    level: "Advanced",
    description: "You communicate well in English and want to polish your skills for leadership and presentations.",
    programs: ["1:1 Classes", "Leadership Training"],
    color: "bg-green-100 border-green-200"
  }
};

type Level = keyof typeof programRecommendations;

const LevelTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<Level | null>(null);
  const [isStarted, setIsStarted] = useState(false);
  const { toast } = useToast();

  const startTest = () => {
    setIsStarted(true);
  };

  const handleAnswer = async (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const correctAnswers = newAnswers.reduce((count, answer, index) => {
        return count + (answer === questions[index].correct ? 1 : 0);
      }, 0);

      const percentage = (correctAnswers / questions.length) * 100;
      
      let level: Level;
      if (percentage >= 80) {
        level = "advanced";
      } else if (percentage >= 60) {
        level = "intermediate";
      } else {
        level = "beginner";
      }

      setResult(level);
      
      // Save test result to Supabase
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const utmSource = urlParams.get('utm_source');
        const utmMedium = urlParams.get('utm_medium');
        const utmCampaign = urlParams.get('utm_campaign');

        await supabase.from('level_test_results').insert({
          score: correctAnswers,
          total_questions: questions.length,
          percentage: percentage,
          level: level,
          recommended_programs: programRecommendations[level].programs,
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCampaign
        });
      } catch (error) {
        console.error('Error saving test result:', error);
      }
      
      toast({
        title: "Test Completed!",
        description: `You scored ${correctAnswers}/${questions.length} (${Math.round(percentage)}%)`,
      });
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setIsStarted(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (!isStarted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-6">
                Free English Level Test
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover your current English level and get personalized program recommendations in just 2 minutes
              </p>
            </div>

            <Card className="program-card max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <BookOpen className="w-16 h-16 text-secondary mx-auto mb-6" />
                <h3 className="font-poppins font-semibold text-2xl text-primary mb-4">
                  Test Overview
                </h3>
                <div className="space-y-4 text-muted-foreground mb-8">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>10 multiple-choice questions</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>2-3 minutes to complete</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Instant results with program recommendations</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>No registration required</span>
                  </div>
                </div>
                <Button onClick={startTest} className="btn-hero" size="lg">
                  Start Level Test
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    );
  }

  if (result) {
    const recommendation = programRecommendations[result];
    
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-6">
                Test Complete!
              </h1>
              <p className="text-xl text-muted-foreground">
                Here are your personalized results and recommendations
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className={`program-card border-2 ${recommendation.color}`}>
                <CardHeader>
                  <CardTitle className="font-poppins text-2xl text-primary text-center">
                    Your Level: {recommendation.level}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-secondary mb-2">
                      {answers.reduce((count, answer, index) => 
                        count + (answer === questions[index].correct ? 1 : 0), 0
                      )}/{questions.length}
                    </div>
                    <p className="text-muted-foreground">Correct Answers</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {recommendation.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Recommended Programs:</h4>
                    {recommendation.programs.map((program, index) => (
                      <div key={index} className="bg-white rounded-lg px-4 py-2 border">
                        {program}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="program-card">
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-semibold text-lg text-primary mb-4">
                      Next Steps
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Calendar className="w-5 h-5 text-secondary mt-0.5" />
                        <div>
                          <p className="font-medium text-primary">Book a Demo</p>
                          <p className="text-sm text-muted-foreground">Experience our teaching methodology</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Users className="w-5 h-5 text-secondary mt-0.5" />
                        <div>
                          <p className="font-medium text-primary">Get Matched</p>
                          <p className="text-sm text-muted-foreground">Find the perfect trainer for your goals</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <BookOpen className="w-5 h-5 text-secondary mt-0.5" />
                        <div>
                          <p className="font-medium text-primary">Start Learning</p>
                          <p className="text-sm text-muted-foreground">Begin your journey to fluent English</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <Button asChild className="w-full btn-hero" size="lg">
                    <a href="/book-demo">Book Free Demo</a>
                  </Button>
                  <Button onClick={resetTest} variant="outline" className="w-full" size="lg">
                    Retake Test
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question */}
          <Card className="program-card">
            <CardHeader>
              <CardTitle className="font-poppins text-2xl text-primary">
                {questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    variant="outline"
                    className="text-left justify-start h-auto p-4 hover:bg-blue-50 hover:border-secondary transition-colors"
                  >
                    <span className="font-medium text-secondary mr-3">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default LevelTest;