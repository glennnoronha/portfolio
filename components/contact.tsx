"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="pt-0 pb-0 md:pt-4 md:pb-4">
      <div className="section-container">
        <div className="flex flex-col space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <div className="w-16 h-1 bg-primary"></div>
            <p className="text-lg text-muted-foreground max-w-[800px]">
              Interested in discussing baseball analytics, sports technology, or
              software development opportunities? Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-secondary/50 rounded-lg p-6 border border-border hover:border-primary/30 transition-all">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <p className="text-muted-foreground">
                      glenn.noronha@yahoo.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-lg p-6 border border-border hover:border-primary/30 transition-all">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Phone</h3>
                    <p className="text-muted-foreground">806-452-9271</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-lg p-6 border border-border hover:border-primary/30 transition-all">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Location</h3>
                    <p className="text-muted-foreground">Amarillo, TX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
