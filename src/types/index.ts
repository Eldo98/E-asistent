export interface User {
  id: string;
  email: string;
  role: 'admin' | 'teacher' | 'student';
  name: string;
  createdAt: Date;
}

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  classId: string;
  className?: string;
  dateOfBirth: string;
  address: string;
  phone: string;
  createdAt: Date;
}

export interface Teacher {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subjects: string[];
  subjectNames?: string[];
  createdAt: Date;
}

export interface Class {
  id: string;
  name: string;
  year: number;
  teacherId: string;
  teacherName?: string;
  createdAt: Date;
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
}
