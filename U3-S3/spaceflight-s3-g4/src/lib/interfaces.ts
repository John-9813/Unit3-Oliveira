export interface Article {
    id: number;
    title: string;
    url: string;
    image_url: string;
    news_site: string;
    summary: string;
    published_at: string;
    updated_at: string;
    featured: boolean;
    launches: any[];
    events: any[];
  }
  
  export interface ApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Article[];
  }
  