export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      password: {
        Row: {
          created_at: string
          email: string
          id: number
          name: string
          password: string
          service: string
          two_factor: boolean
          updated_at: string
          user_id: number
        }
        Insert: {
          created_at: string
          email: string
          id?: number
          name: string
          password: string
          service: string
          two_factor?: boolean
          updated_at: string
          user_id: number
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          name?: string
          password?: string
          service?: string
          two_factor?: boolean
          updated_at?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "password_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "user"
            referencedColumns: ["id"]
          }
        ]
      }
      user: {
        Row: {
          created_at: string
          email: string
          id: number
          name: string
          updated_at: string
        }
        Insert: {
          created_at: string
          email: string
          id?: number
          name: string
          updated_at: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
