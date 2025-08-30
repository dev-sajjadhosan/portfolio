interface Skill {
  id: number
  name: string
  type: string
}

type ProjectType = {
  _id: string | number
  id: string | number
  name: string
  repo: {
    parent: string
  }
  picture: string
  video: string
  isVideo: boolean
  level: string
  live: string
  description: string
}

interface Technology {
  name: string
  icon: string
  url: string
}

interface Feature {
  name: string
  description: string
}

interface Preview {
  name: string
  picture: string | object
  features: string[]
  description: string
}

interface Reaction {
  name: string
  icon: string
  count: number
}

interface Feedback {
  name: string
  email: string
  message: string
}

interface Timeline {
  start: string
  end: string
  duration: string
}

interface ProjectDocument {
  _id: string | number
  name: string
  type: string
  status: string
  shortVideo: string
  isVideo: boolean
  isFigma: boolean
  level: string
  picture: string
  logo: string
  figma: string
  repo: {
    parent?: string
    client?: string
    server?: string
  }
  live: string
  technologies: string[]
  newTechnologies: string[]
  creatingJourney: string
  features: Feature[]
  comingFeatures: Feature[]
  description: string
  previews: Preview[]
  reactions: Reaction[]
  timeline: Timeline
  feedbacks: Feedback[]
}

interface alertDoc {
  success: boolean
  message: string
}

export { Skill, ProjectType, ProjectDocument, Preview, alertDoc }
