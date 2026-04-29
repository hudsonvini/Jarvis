/**
 * @typedef {"student" | "teacher" | "admin"} UserRole
 */

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {UserRole} role
 * @property {string} [avatarUrl]
 */

/**
 * @typedef {Object} ActionStateFieldErrors
 * @property {string} [name]
 * @property {string} [fullName]
 * @property {string} [phone]
 * @property {string} [email]
 * @property {string} [password]
 * @property {string} [confirmPassword]
 * @property {string} [cpf]
 * @property {string} [dataNascimento]
 * @property {string} [acceptTerms]
 */

/**
 * @typedef {Object} ActionState
 * @property {string} [error]
 * @property {ActionStateFieldErrors} [fieldErrors]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} LoginApiResponse
 * @property {string} access_token
 * @property {string} expiresAt
 */

/**
 * @typedef {Object} RegisterApiResponse
 * @property {string} success
 */

/**
 * @typedef {Object} ForgotPasswordApiResponse
 * @property {string} msg
 * @property {string} [linkInDev]
 */

/**
 * @typedef {Object} RecoverPasswordApiResponse
 * @property {string} msg
 */

/**
 * @typedef {"iniciante" | "intermediario" | "avancado"} CourseLevel
 * @typedef {"active" | "coming_soon" | "archived"} CourseStatus
 * @typedef {"teacher" | "system"} AttendanceMarker
 */

/**
 * @typedef {Object} Trail
 * @property {string} id
 * @property {string} name
 * @property {string} slug
 * @property {string} description
 * @property {string} bannerImage
 * @property {string} icon
 * @property {string} color
 * @property {number} order
 * @property {string} [subtitle]
 * @property {string} [longDescription]
 * @property {string} [heroImage]
 * @property {string} [customBannerText]
 */

/**
 * @typedef {Object} Course
 * @property {string} id
 * @property {string} trailId
 * @property {string} name
 * @property {string} slug
 * @property {string} description
 * @property {number} totalHours
 * @property {number} totalLessons
 * @property {number} price
 * @property {number} numberOfStudents
 * @property {number} numberOfClasses
 * @property {string} bannerImage
 * @property {string} thumbnailImage
 * @property {string} logoImage
 * @property {string[]} tags
 * @property {CourseLevel} level
 * @property {boolean} isPresencial
 * @property {string} [schedule]
 * @property {CourseStatus} status
 * @property {string} [subtitle]
 * @property {string} [longDescription]
 * @property {string} [videoUrl]
 * @property {string} [heroImage]
 */

/**
 * @typedef {Object} Module
 * @property {string} id
 * @property {string} courseId
 * @property {string} name
 * @property {number} order
 * @property {number} totalLessons
 * @property {number} totalDuration
 */

/**
 * @typedef {Object} Lesson
 * @property {string} id
 * @property {string} moduleId
 * @property {string} name
 * @property {number} order
 * @property {number} duration
 * @property {string} [thumbnailImage]
 * @property {string} [description]
 * @property {string} [videoUrl]
 * @property {string} [materialUrl]
 */

/**
 * @typedef {Object} Attendance
 * @property {string} studentId
 * @property {string} lessonId
 * @property {string} courseId
 * @property {boolean} isPresent
 * @property {AttendanceMarker} markedBy
 * @property {string} markedAt
 */

export {};
