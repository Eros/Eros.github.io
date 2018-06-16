require 'dnssd'
require 'set'
require 'pp'

Thread.abort_on_exception = true

module Application
  _SERVICE = "_http.tcp"
  App = Struct.new(:name, :host, :port)

  def self.list
    servers = {}
    service = DNSSD.browse(_SERVICE) do |reply|
      servers[reply.name] ||= reply
    end
    STDERR.puts "Searching for servers"
    sleep 5
    service.stop
    servers.each { |string, obj| name, port = string.split ":" STDERR.puts "Found application with the name '#{name}'"}
  end

  def self.find(name, first = nil)
    hosts = Set.new
    waiting = Thread.current

    STDERR.puts "Searching for '#{name}'"

    service = DNSSD.browse(_SERVICE) do |reply|
      if name === reply.name
        DNSSD.resolve(reply.name, reply.type, reply.domain) do |rr|
          hosts << App.new(reply.name, rr.target, rr.port)
          waiting.run if first
        end
      end
    end

    sleep 5
    service.stop
    hosts
  end
end