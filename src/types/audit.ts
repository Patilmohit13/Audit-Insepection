export interface AuditTemplate {
  id: string;
  title: string;
  description: string;
  sections: AuditSection[];
  standard?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuditSection {
  id: string;
  title: string;
  questions: AuditQuestion[];
}

export interface AuditQuestion {
  id: string;
  text: string;
  type: 'yesNo' | 'multipleChoice' | 'descriptive';
  options?: string[];
  required: boolean;
}

export interface Audit {
  id: string;
  templateId: string;
  status: 'scheduled' | 'inProgress' | 'completed';
  facility: string;
  department: string;
  auditors: string[];
  scheduledDate: Date;
  completedDate?: Date;
  findings: AuditFinding[];
}

export interface AuditFinding {
  id: string;
  questionId: string;
  response: string;
  evidence?: Evidence[];
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'inProgress' | 'closed';
}

export interface Evidence {
  id: string;
  type: 'photo' | 'video' | 'audio';
  url: string;
  description?: string;
}