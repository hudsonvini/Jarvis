export const attendanceRecords = [
  // CS2 Competitivo (course-1)
  // mod-1-1 lessons (attended 4 of 6)
  { studentId: "user-1", lessonId: "les-1-1-1", courseId: "course-1", isPresent: true, markedBy: "teacher", markedAt: "2026-02-03T14:00:00Z" },
  { studentId: "user-1", lessonId: "les-1-1-2", courseId: "course-1", isPresent: true, markedBy: "teacher", markedAt: "2026-02-05T14:00:00Z" },
  { studentId: "user-1", lessonId: "les-1-1-3", courseId: "course-1", isPresent: false, markedBy: "teacher", markedAt: "2026-02-10T14:00:00Z" },
  { studentId: "user-1", lessonId: "les-1-1-4", courseId: "course-1", isPresent: true, markedBy: "teacher", markedAt: "2026-02-12T14:00:00Z" },
  { studentId: "user-1", lessonId: "les-1-1-5", courseId: "course-1", isPresent: true, markedBy: "system", markedAt: "2026-02-17T14:00:00Z" },
  // mod-1-2 lessons (attended 3 of 5)
  { studentId: "user-1", lessonId: "les-1-2-1", courseId: "course-1", isPresent: true, markedBy: "teacher", markedAt: "2026-02-24T14:00:00Z" },
  { studentId: "user-1", lessonId: "les-1-2-2", courseId: "course-1", isPresent: true, markedBy: "teacher", markedAt: "2026-02-26T14:00:00Z" },
  { studentId: "user-1", lessonId: "les-1-2-3", courseId: "course-1", isPresent: true, markedBy: "teacher", markedAt: "2026-03-03T14:00:00Z" },
  // mod-1-3 lessons (attended 2 of 6)
  { studentId: "user-1", lessonId: "les-1-3-1", courseId: "course-1", isPresent: true, markedBy: "teacher", markedAt: "2026-03-10T14:00:00Z" },
  { studentId: "user-1", lessonId: "les-1-3-2", courseId: "course-1", isPresent: true, markedBy: "teacher", markedAt: "2026-03-12T14:00:00Z" },

  // Front-End com Next.js (course-6)
  // mod-6-1 lessons (attended 5 of 6)
  { studentId: "user-1", lessonId: "les-6-1-1", courseId: "course-6", isPresent: true, markedBy: "teacher", markedAt: "2026-02-04T19:00:00Z" },
  { studentId: "user-1", lessonId: "les-6-1-2", courseId: "course-6", isPresent: true, markedBy: "teacher", markedAt: "2026-02-06T19:00:00Z" },
  { studentId: "user-1", lessonId: "les-6-1-3", courseId: "course-6", isPresent: true, markedBy: "teacher", markedAt: "2026-02-11T19:00:00Z" },
  { studentId: "user-1", lessonId: "les-6-1-4", courseId: "course-6", isPresent: true, markedBy: "system", markedAt: "2026-02-13T19:00:00Z" },
  { studentId: "user-1", lessonId: "les-6-1-5", courseId: "course-6", isPresent: true, markedBy: "teacher", markedAt: "2026-02-18T19:00:00Z" },
  // mod-6-2 lessons (attended 3 of 5)
  { studentId: "user-1", lessonId: "les-6-2-1", courseId: "course-6", isPresent: true, markedBy: "teacher", markedAt: "2026-02-25T19:00:00Z" },
  { studentId: "user-1", lessonId: "les-6-2-2", courseId: "course-6", isPresent: false, markedBy: "teacher", markedAt: "2026-02-27T19:00:00Z" },
  { studentId: "user-1", lessonId: "les-6-2-3", courseId: "course-6", isPresent: true, markedBy: "teacher", markedAt: "2026-03-04T19:00:00Z" },
  { studentId: "user-1", lessonId: "les-6-2-4", courseId: "course-6", isPresent: true, markedBy: "teacher", markedAt: "2026-03-06T19:00:00Z" },
  // mod-6-3 lessons (attended 1 of 6)
  { studentId: "user-1", lessonId: "les-6-3-1", courseId: "course-6", isPresent: true, markedBy: "teacher", markedAt: "2026-03-11T19:00:00Z" },

  // Robotica com Arduino (course-4)
  // mod-4-1 lessons (attended 4 of 5)
  { studentId: "user-1", lessonId: "les-4-1-1", courseId: "course-4", isPresent: true, markedBy: "teacher", markedAt: "2026-02-03T09:00:00Z" },
  { studentId: "user-1", lessonId: "les-4-1-2", courseId: "course-4", isPresent: true, markedBy: "teacher", markedAt: "2026-02-05T09:00:00Z" },
  { studentId: "user-1", lessonId: "les-4-1-3", courseId: "course-4", isPresent: true, markedBy: "teacher", markedAt: "2026-02-10T09:00:00Z" },
  { studentId: "user-1", lessonId: "les-4-1-4", courseId: "course-4", isPresent: true, markedBy: "system", markedAt: "2026-02-12T09:00:00Z" },
  // mod-4-2 lessons (attended 2 of 6)
  { studentId: "user-1", lessonId: "les-4-2-1", courseId: "course-4", isPresent: true, markedBy: "teacher", markedAt: "2026-02-24T09:00:00Z" },
  { studentId: "user-1", lessonId: "les-4-2-2", courseId: "course-4", isPresent: true, markedBy: "teacher", markedAt: "2026-02-26T09:00:00Z" },
];

export function getAttendanceByCourse(studentId, courseId) {
  return attendanceRecords.filter(
    (record) => record.studentId === studentId && record.courseId === courseId
  );
}

export function isLessonAttended(studentId, lessonId) {
  return attendanceRecords.some(
    (record) =>
      record.studentId === studentId &&
      record.lessonId === lessonId &&
      record.isPresent
  );
}
