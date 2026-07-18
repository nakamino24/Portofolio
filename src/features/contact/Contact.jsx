/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react'
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('This is a demo. In a real site, this would send an email.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Get In Touch
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Have a question or want to work together? I&apos;d love to hear from
            you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Contact Information
              </h3>

              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <EnvelopeIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Email
                    </p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                      faiz.quways@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                    <PhoneIcon className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Phone
                    </p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                      +6289503279320
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                    <MapPinIcon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Location
                    </p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                      Bekasi, West Java
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Contact Card */}
            <div className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-white">
              <h3 className="text-lg font-semibold mb-2">
                Let&apos;s Connect!
              </h3>
              <p className="text-sm text-blue-100">
                I&apos;m always interested in new opportunities and
                collaborations. Feel free to reach out if you&apos;d like to
                discuss a project or just say hello!
              </p>
              <div className="mt-2 flex items-center text-sm text-blue-100">
                <ChatBubbleLeftRightIcon className="w-3 h-3 mr-1" />
                <span>Usually responds within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  <UserIcon className="w-3 h-3 inline mr-1" />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  <EnvelopeIcon className="w-3 h-3 inline mr-1" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  <ChatBubbleLeftRightIcon className="w-3 h-3 inline mr-1" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell me about your project or just say hello..."
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-4 rounded hover:bg-purple-600 hover:to-pink-700"
              >
                <PaperAirplaneIcon className="w-3 h-3 mr-1" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
