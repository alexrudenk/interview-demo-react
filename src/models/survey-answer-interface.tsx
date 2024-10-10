export interface SurveyAnswerModel {
    name: string;
    age: number;
    preferences?: {
        sports?: boolean;
        books?: boolean;
        travel?: boolean;
    }
}